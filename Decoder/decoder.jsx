// Decoder.jsx

import { useState } from 'react';

// Fonction pour obtenir un accessToken valide
export const getValidAccessToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // Si les tokens ne sont pas présents, on suppose qu'ils sont expirés
    if (!accessToken || !refreshToken) {
        throw new Error('Les tokens ne sont pas présents dans le localStorage.');
    }

    // Fonction pour vérifier si un token est expiré
    const isTokenExpired = (token) => {
        if (!token) return true; // Si le token est inexistant, il est expiré
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        return exp * 1000 < Date.now(); // Vérifie si la date d'expiration est passée
    };

    // Vérifie si l'accessToken est expiré
    if (isTokenExpired(accessToken)) {
        // Si expiré, demande un nouveau accessToken en utilisant refreshToken
        const response = await fetch('http://localhost:8081/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) {
            throw new Error('Impossible de rafraîchir le token.');
        }

        const tokens = await response.json();
        const newAccessToken = tokens['access-token'];

        // Met à jour le nouveau accessToken dans le localStorage
        localStorage.setItem('accessToken', newAccessToken);

        return newAccessToken;
    }

    // Si l'accessToken est valide, le retourne directement
    return accessToken;
};

// Fonction pour vérifier si l'utilisateur est authentifié
export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken && !isTokenExpired(accessToken);
};



// Fonction interne pour vérifier si un token est expiré
const isTokenExpired = (token) => {
    if (!token) return true; // Si le token est inexistant, il est expiré
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return exp * 1000 < Date.now(); // Vérifie si la date d'expiration est passée
};
