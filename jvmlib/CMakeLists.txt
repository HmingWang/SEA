cmake_minimum_required(VERSION 3.12)
cmake_policy(SET CMP0091 NEW)

project(jvmlib)

set(CMAKE_CXX_STANDARD 20)
set (CMAKE_CONFIGURATION_TYPES "Release")
   
add_library(jvmlib SHARED invoker.cpp)
add_executable(test test.cpp)

if(MSVC)
target_compile_options(jvmlib PRIVATE "/utf-8")
target_compile_options(test PRIVATE "/utf-8")

set_property(TARGET jvmlib PROPERTY MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")
endif()