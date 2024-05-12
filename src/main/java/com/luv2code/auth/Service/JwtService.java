package com.luv2code.auth.Service;

import com.luv2code.auth.Config.RsaKeyConfig;
import com.luv2code.auth.Entity.AppUser;
import com.luv2code.auth.Exception.JwtTokenException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    private final RsaKeyConfig rsaKeyConfig;

    public JwtService(RsaKeyConfig rsaKeyConfig) {
        this.rsaKeyConfig = rsaKeyConfig;
    }

    public String extractUsername(String token) throws JwtTokenException {
        return extractClaim(token, Claims::getSubject);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public boolean isValid(String token) throws JwtTokenException {
        if (isTokenExpired(token)) {
            throw new JwtTokenException("Token expired");
        }

        try {
            Jwts.parserBuilder()
                    .setSigningKey(rsaKeyConfig.publicKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            throw new JwtTokenException("Token not valid");
        }
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    public String extractClaims(String token) throws JwtTokenException {
        try {
            Jws<Claims> jws = Jwts.parserBuilder()
                    .setSigningKey(rsaKeyConfig.publicKey())
                    .setAllowedClockSkewSeconds(Long.MAX_VALUE / 1000) // Autorise une marge d'erreur de presque l'infini
                    .build()
                    .parseClaimsJws(token);
            Claims claims = jws.getBody();
            return (String) claims.get("type");
        } catch (Exception e) {
            throw new JwtTokenException("Unable to extract claims from token");
        }
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(rsaKeyConfig.publicKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String generateToken(AppUser user) {
        return Jwts.builder()
                .claim("type", "Token")
                .claim("roles", user.getRole())
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 1000)) // 1 minute
                .signWith(rsaKeyConfig.privateKey(), SignatureAlgorithm.RS256)
                .compact();
    }

    public String generateReflechToken(AppUser user) {
        return Jwts.builder()
                .claim("type", "Reflech")
                .claim("roles", user.getRole())
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 heure
                .signWith(rsaKeyConfig.privateKey(), SignatureAlgorithm.RS256)
                .compact();
    }
}
