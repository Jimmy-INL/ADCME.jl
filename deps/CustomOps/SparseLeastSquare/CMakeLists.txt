#find_package(CUDA QUIET)
#set(CMAKE_CXX_FLAGS "-std=c++11 ${CMAKE_CXX_FLAGS}")
#set(CMAKE_CXX_FLAGS "-O3 ${CMAKE_CXX_FLAGS}")
#set(CMAKE_CXX_FLAGS "-shared ${CMAKE_CXX_FLAGS}")
#set(CMAKE_CXX_FLAGS "-fPIC ${CMAKE_CXX_FLAGS}")
#set(CUDA_NVCC_FLAGS ${CUDA_NVCC_FLAGS};--expt-relaxed-constexpr)
#SET(CUDA_PROPAGATE_HOST_FLAGS ON)

#find_program(_nvidia_smi "nvidia-smi")
#if (_nvidia_smi)
#  add_definitions(-DUSE_GPU)
#  message("Compiling GPU-compatible custom operator!")
#  cuda_add_library(SparseSolver SHARED SparseSolver.cpp SparseSolver.cu)
#else()
  add_library(SparseLeastSquare SHARED SparseLeastSquare.cpp)
#endif()

set_property(TARGET SparseLeastSquare PROPERTY POSITION_INDEPENDENT_CODE ON)
target_link_libraries(SparseLeastSquare ${TF_LIB_FILE})
file(MAKE_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build)
set_target_properties(SparseLeastSquare PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build RUNTIME_OUTPUT_DIRECTORY_RELEASE ${CMAKE_CURRENT_SOURCE_DIR}/build)
