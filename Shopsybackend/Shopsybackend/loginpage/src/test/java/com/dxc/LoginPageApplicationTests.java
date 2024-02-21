package com.dxc;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.dxc.model.User;
import com.dxc.model.UserCredential;
import com.dxc.repository.UserRepository;
import com.dxc.exception.IncorrectPasswordException;
import com.dxc.exception.UserExistsException;
import com.dxc.exception.UserNotFoundException;
import com.dxc.service.UserService;
import com.dxc.service.UserServiceImpl;
import com.dxc.service.JWTTokenGeneratorService;
import com.dxc.service.TokenGeneratorService;

@SpringBootTest
class LoginPageApplicationTests {
	
	 @Autowired
	    private UserService service;

	    @MockBean
	    private UserRepository userRepository;
	    
	 @Test
	    public void saveUserTest() throws UserExistsException {
	        User user = new User(1,"Swetha","swethag2@gmail.com","swetha","buyer");
	        when(userRepository.save(user)).thenReturn(user);
	        assertEquals(user,service.registerUser(user));
	    }
	 
	 
}
