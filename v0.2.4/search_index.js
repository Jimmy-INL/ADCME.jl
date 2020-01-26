var documenterSearchIndex = {"docs":
[{"location":"#ADCME-Documentation-1","page":"ADCME Documentation","title":"ADCME Documentation","text":"","category":"section"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"ADCME is suitable for conducting inverse modeling in scientific computing. The purpose of the package is to: (1) provide differentiable programming framework for scientific computing based on TensorFlow automatic differentiation (AD) backend; (2) adapt syntax to facilitate implementing scientific computing, particularly for numerical PDE discretization schemes; (3) supply missing functionalities in the backend (TensorFlow) that are important for engineering, such as sparse linear algebra, constrained optimization, etc. Applications include","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"full wavelength inversion\nreduced order modeling in solid mechanics\nlearning hidden geophysical dynamics\nphysics based machine learning\nparameter estimation in stochastic processes","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"The package inherents the scalability and efficiency from the well-optimized backend TensorFlow. Meanwhile, it provides access to incooperate existing C/C++ codes via the custom operators. For example, some functionalities for sparse matrices are implemented in this way and serve as extendable \"plugins\" for ADCME. ","category":"page"},{"location":"#Getting-Started-1","page":"ADCME Documentation","title":"Getting Started","text":"","category":"section"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"To install ADCME, use the following command:","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"using Pkg\nPkg.add(\"ADCME\")","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"to load the package, use","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"using ADCME","category":"page"},{"location":"#","page":"ADCME Documentation","title":"ADCME Documentation","text":"The building process will check the dependencies (tensorflow, tensorflow-probability, etc.) If the install is not successful, check your system and make sure tensorflow==1.14 and tensorflow-probability==0.7 are properly installed.","category":"page"}]
}