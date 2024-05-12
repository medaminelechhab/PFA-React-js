package com.luv2code.auth.filters;

import com.luv2code.auth.Exception.JwtTokenException;
import com.luv2code.auth.Service.JwtService;
import com.luv2code.auth.Service.UserDetailsServiceImp;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsServiceImp userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsServiceImp userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String requestURI = request.getRequestURI();

        // Passer les requêtes pour le rafraîchissement du token
        if (requestURI.equals("/RefreshToken")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extraire le token JWT de l'en-tête Authorization
        String token = extractToken(request);

        try {
            if (token != null && jwtService.isValid(token)) {
                // Extraire le nom d'utilisateur du token JWT
                String username = jwtService.extractUsername(token);

                // Charger les détails de l'utilisateur
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                // Créer l'authentification
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );

                // Ajouter les détails de la requête à l'authentification
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // Définir l'authentification dans le contexte de sécurité
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (JwtTokenException e) {
            // Gérer l'exception JWT
           throw  new JwtTokenException("exception JWT");
        }

        // Poursuivre la chaîne de filtres
        filterChain.doFilter(request, response);
    }

    private String extractToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7); // Ignorer "Bearer "
        }
        return null;
    }
}
