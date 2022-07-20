package com.martins.usersregister.service;

import com.martins.usersregister.model.Usuario;
import com.martins.usersregister.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario getById(Integer id){
        return usuarioRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        usuarioRepository.deleteById(id);
    }
}
