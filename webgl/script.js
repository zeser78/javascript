// Prepare the canvas and get WebGL context
var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d");
// context.font = "20pt Calibri";
// context.fillStyle = "green";
// context.fillText("Welcome to the World", 20, 20);

var gl = canvas.getContext("experimental-webgl");

// gl.clearColor(0.9, 0.9, 0.8, 1);
// gl.clear(gl.COLOR_BUFFER_BIT);

// 2 Define the geometry and store it in buffer objects
var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5, 0, 0.5];

//  Create a new buffer object
var vertex_buffer = gl.createBuffer();
// Bind an empty array buffer to it
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
// Pass the vertices data to the buffer
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
// Unbind the buffer
gl.bindBuffer(gl.ARRAY_BUFFER, null);
// 3 Create and compile Shader programs
// Vertex shader source code
var vertCode =
  "attribute vec2 coordinates;" +
  "void main(void) {" +
  "gl_Position = vec4(coordinates, 0.0,1.0);" +
  "}";

// Create a vertex shader object
var vertShader = gl.createShader(gl.VERTEX_SHADER);
// Attach vertex shader source code
gl.shaderSource(vertShader, vertCode);
// Compile the vertex shader
gl.compileShader(vertShader);
// Fragment shader source code

var fragCode = "void main(void){" + "gl_FragColor = vec4(1,0.5,0.0,1);" + "}";
// Create fragment shader object
var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

// Attach fragment shader source code
gl.shaderSource(fragShader, fragCode);
// Compile the fragment shader
gl.compileShader(fragShader);
// Create a shader program object to store combined shader program
var shaderProgram = gl.createProgram();

// Attach a vertex shader
gl.attachShader(shaderProgram, vertShader);

// Attacha fragment shader
gl.attachShader(shaderProgram, fragShader);

// Link both programs
gl.linkProgram(shaderProgram);
// Use the combined shader program object
gl.useProgram(shaderProgram);
// 4 Associate the shader programs to buffer objects

// Bind vertex buffer object
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

// Get the attribute location
var coord = gl.getAttribLocation(shaderProgram, "coordinates");
// point and attribute to the currently bound VBO
gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

// Pointer(coord, 2, gl.FLOAT, false, 0, 0);
// Enable the attribute
gl.enableVertexAttribArray(coord);
// 5 Drawing the requered object (triangle)
// Clear the canvas
gl.clearColor(0.5, 0.5, 0.5, 1);

// Enable the depth test
gl.enable(gl.DEPTH_TEST);

//Clear the color buffer bit
gl.clear(gl.COLOR_BUFFER_BIT);

// Set the viewport
gl.viewport(0, 0, canvas.width, canvas.height);

// Draw the triangle
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
// Vertex buffer objects store data about vertices.
// Index buffer objects store data aboutthe indices.
// Frame buffer is a portion of graphics memory that hold the scene data.

// MESH
// drawArrays()
// dranElements();

// Vertex Shader is the program code called on every vertex.
// Fragment Shader (Pixel Shader) a mesh is formed by multiple triangles,
//  and the surface of each of the triangles is known as a fragment.
// Fragment shader is the code that runs pn every pixel on each fragment.

// 1) create Data for the required geometry
// Shader in the form of buffers

// Step 1 ) Prepare the canvas and get WebGL rendering context
