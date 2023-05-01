const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Boris XD'
    };

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(130, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase());
});