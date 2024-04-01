package com.whm.sea;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@Slf4j
@SpringBootApplication
public class SeaApplication {

    public static void main(String[] args) {
		log.info("argc:{},argv:{}",args.length, Arrays.stream(args).findFirst());
		SpringApplication.run(SeaApplication.class, args);
    }

}
