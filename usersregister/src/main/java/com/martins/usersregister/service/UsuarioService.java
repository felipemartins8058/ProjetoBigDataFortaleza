package com.martins.usersregister.service;

import com.martins.usersregister.model.Usuario;

import java.util.List;

public interface UsuarioService {
    public Usuario saveUsuario(Usuario usuario);
    public List<Usuario> getAllUsuarios();
    public Usuario getById(Integer id);
    public void delete(Integer id);
}
