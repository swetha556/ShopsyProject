package com.dxc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@SpringBootApplication
@EnableEurekaClient
public class LoginPageApplication {
    protected static final Logger logger = LogManager.getLogger();
	public static void main(String[] args) {
		 logger.info("Hello User!");
		SpringApplication.run(LoginPageApplication.class, args);
	}

}
