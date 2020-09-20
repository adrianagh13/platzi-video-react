import md5 from 'md5';

const gravatar = email => {
    const base = 'https://gravatar.com/avatar/';
    const formattedEmail = (email).trim().toLowerCase(); //trim() es para quitar espacios en blanco
    const hash = md5(formattedEmail, { encoding : "binary"}); //a md5 le pasamod 2 parámetros, el email a convertir y por el @ convertimos a binario
    return  `${base}${hash}` //retornamos lo que sería l url base y el email convertido a hash
}

export default gravatar;

//recuerda que gravatar trabaja con emails que se convierten a hashes mediante md5