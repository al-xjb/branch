package com.tata.elxsi.iot.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class IotEurekaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(IotEurekaServiceApplication.class, args);
	}

}
