cmake_minimum_required(VERSION 3.12)
project(jvmlib)

set (CMAKE_CONFIGURATION_TYPES "Release")
   
add_library(jvmlib SHARED invoker.cpp)
add_executable(test test.cpp)

if(MSVC)
target_compile_options(jvmlib PRIVATE "/utf-8")
endif()