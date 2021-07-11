(self.webpackChunknodi_docs=self.webpackChunknodi_docs||[]).push([[819],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3025:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},d="Walk through tutorial",c={unversionedId:"basics/walk-through",id:"basics/walk-through",isDocsHomePage:!1,title:"Walk through tutorial",description:"Here's a quick example that shows how to use Nodi.",source:"@site/user/basics/walk-through.md",sourceDirName:"basics",slug:"/basics/walk-through",permalink:"/docs/user/basics/walk-through",editUrl:"https://github.com/Nodi3d/docs/edit/main/user/basics/walk-through.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Nodi User's Guide",permalink:"/docs/user/guide"},next:{title:"Graph editor controls",permalink:"/docs/user/basics/user-interfaces/graph-editor-controls"}},l=[{value:"Get started Nodi",id:"get-started-nodi",children:[]},{value:"Assemble the data flow",id:"assemble-the-data-flow",children:[]},{value:"Arrange Spheres on the grid",id:"arrange-spheres-on-the-grid",children:[]},{value:"Create an Attractor",id:"create-an-attractor",children:[]},{value:"Let&#39;s control the position with the slider",id:"lets-control-the-position-with-the-slider",children:[]}],u={toc:l};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"walk-through-tutorial"},"Walk through tutorial"),(0,o.kt)("p",null,"Here's a quick example that shows how to use Nodi."),(0,o.kt)("p",null,"In this tutorial, we will look at basic usage of Nodi based on simple examples.\nThis example results in the following:\n",(0,o.kt)("img",{alt:"the final content",src:n(8694).Z})),(0,o.kt)("p",null,"The size of the spheres arranged on the grid is changed according to the distance from a certain point.\nHere is the link for the final content. ",(0,o.kt)("a",{parentName:"p",href:"https://nodi3d.com/editor/aPLOH91sLtTCp8z0QrOU"},"https://nodi3d.com/editor/aPLOH91sLtTCp8z0QrOU")," "),(0,o.kt)("h2",{id:"get-started-nodi"},"Get started Nodi"),(0,o.kt)("p",null,"First, let's put a node that generates the grid."),(0,o.kt)("p",null,"Display node search box by Tab or Double click on the Graph editor. (left side of app screen)\nEnter SquareGrid in the form of the search box and select the candidate that appeared.\nThen, the placeholder of the newly added node appears at the mouse position, and when you click in that state, the SquareGrid node is placed.\n",(0,o.kt)("img",{alt:"SearchAndAddSquareGrid",src:n(1724).Z})),(0,o.kt)("p",null,"Each node has a different function. In Nodi, programming is performed by connecting these nodes to create a model."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Such programming techniques are called Node-based Programming or Dataflow programming.\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Visual_programming_language"},"https://en.wikipedia.org/wiki/Visual_programming_language"))),(0,o.kt)("p",null,"Let's examine what functions the added SquareGrid node has. Press the right mouse button on a node to display the Node Inspector."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SquareGridInspector",src:n(4728).Z})),(0,o.kt)("p",null,"In the node inspector, you can check the description of the node and set the default value of the IO that the node has.\nIf you look at the inspector, you can see that the SquareGrid node is the node that creates the square grid."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IO represents the entry and exit of the data used to join the nodes together.  IO on the left side of each node is the data entry, and the right side is the data exit.")),(0,o.kt)("p",null,"The default values of SquareGrid IO are following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Base plane for grid"),(0,o.kt)("td",{parentName:"tr",align:null},"XY Plane")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Size of grid cells in base plane"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"# of grid cells in x direction"),(0,o.kt)("td",{parentName:"tr",align:null},"5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"# of grid cells in y direction"),(0,o.kt)("td",{parentName:"tr",align:null},"5")))),(0,o.kt)("p",null,"SquareGrid in the default state means that 5 grids of length 1 are laid vertically and horizontally on the XY plane.\nWhen you look at the Viewer (Right side of app screen), you can see that there is a grid laid out 5 by 5 in the vertical and horizontal directions, points that represent each vertex on the grid, and curves that represent each side of the grid are displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SquareGridPreview",src:n(1311).Z})),(0,o.kt)("p",null,"The data input to the node and the contents of the data output from the node can also be confirmed with the tooltip displayed by moving the mouse cursor over the IO."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IOPreview",src:n(3846).Z})),(0,o.kt)("h2",{id:"assemble-the-data-flow"},"Assemble the data flow"),(0,o.kt)("p",null,"Now that we know that a grid is created, let's change the number of grids.\nThe number of grids in the SquareGrid node can be changed by the third and fourth inputs, which accept a ",(0,o.kt)("strong",{parentName:"p"},"Number type"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is a ",(0,o.kt)("strong",{parentName:"p"},"data type")," ?\nNodi has various data types, and the data types that are accepted differ depending on the IO of the node.\nEach IO has a data type, and will not accept input unless it has a matching type.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodi3d.com/references/data-types"},"https://docs.nodi3d.com/references/data-types"))),(0,o.kt)("p",null,"Add a ",(0,o.kt)("strong",{parentName:"p"},"UINumber")," node to specify the number of grids.\nSet the value of the UINumber node to 8 and connect the output of the UINumber node to the third and fourth inputs of the SquareGrid node.\nIf you drag on IO, the edge will be displayed. By bringing the edge close to the IO you want to connect, connect the nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ConnectNumberAndSquare",src:n(3732).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Connected edges can be disconnected using the IO inspector or the cut command.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodi3d.com/basics/user-interfaces/data-flow#disconnect-edges"},"https://docs.nodi3d.com/basics/user-interfaces/data-flow#disconnect-edges"))),(0,o.kt)("p",null,"When connected, the number of vertical and horizontal grids output from SquareGrid is the number set in UINumber."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SquareGridPreview2",src:n(6443).Z})),(0,o.kt)("h2",{id:"arrange-spheres-on-the-grid"},"Arrange Spheres on the grid"),(0,o.kt)("p",null,"Next, place Sphere ",(0,o.kt)("strong",{parentName:"p"},"Mesh")," at the position of the point placed in SquareGrid.\nAdd a ",(0,o.kt)("strong",{parentName:"p"},"Sphere")," node that generates Sphere Mesh."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A mesh is a collection of vertices, edges and faces that defines the shape of a polyhedral object in 3D computer graphics and solid modeling.\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Polygon_mesh"},"https://en.wikipedia.org/wiki/Polygon_mesh"))),(0,o.kt)("p",null,"The Sphere node takes base position (Point, Vector) radius (Number) resolution (Number) as input.\nBy connecting the Point output from SquareGrid to the input of this base position, Sphere can be placed at the position of that Point."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ConnectSquareAndSphere",src:n(3236).Z})),(0,o.kt)("h2",{id:"create-an-attractor"},"Create an Attractor"),(0,o.kt)("p",null,"Next, let's make the size of each Sphere change according to the distance from a certain Point (Attractor)."),(0,o.kt)("p",null,"First, place a ",(0,o.kt)("strong",{parentName:"p"},"Point")," node to create a point that represents the Attractor.\nPoint node outputs Point data at position (0, 0, 0) by default."),(0,o.kt)("p",null,"Measure the distance between each point of the grid output from SquareGrid and the Attractor. "),(0,o.kt)("p",null,"Place a ",(0,o.kt)("strong",{parentName:"p"},"Distance")," node that measures the distance between two points, and connect the second output from SquareGrid to the first input of the Distance node. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ConnectSquareAndDistance",src:n(5688).Z})),(0,o.kt)("p",null,"Then connect the Attractor's Point to the second input of the Distance node. "),(0,o.kt)("p",null,"You have now measured the distance between each vertex of the grid and the Attractor.\nThe data output from Distance can be previewed in the IO tooltip, but can also be confirmed by connecting a ",(0,o.kt)("strong",{parentName:"p"},"Text")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ConnectDistanceAndText",src:n(9140).Z})),(0,o.kt)("p",null,"Next, divide the obtained distance by 10 by combining the Division node and the UINumber node, reduce the number, and connect it to the second input (radius) of Sphere."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DivideDistanceBy10",src:n(5279).Z})),(0,o.kt)("p",null,"Then, the Sphere closer to the Attractor can be deformed to be smaller."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AttractedSpheres",src:n(4942).Z})),(0,o.kt)("h2",{id:"lets-control-the-position-with-the-slider"},"Let's control the position with the slider"),(0,o.kt)("p",null,"Next, let's make it possible to control the position of the attractor with the slider.\nPlace two ",(0,o.kt)("strong",{parentName:"p"},"UINumberSlider")," nodes to change the X and Z positions of the attractor.\nOpen the Inspector for each UINumberSlider and set the minimum value to 0 and the maximum value to 1."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UINumberSlider",src:n(7757).Z})),(0,o.kt)("p",null,"Then, multiply the output of UINumberSlider with the output of UINumber set to the grid size by the ",(0,o.kt)("strong",{parentName:"p"},"Multiplication")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multiplication",src:n(9860).Z})),(0,o.kt)("p",null,"Then, when the result of the multiplication is connected to the X and Z inputs of the Point node representing the attractor, the position of the attractor will change according to the slider.\nThis is completed! \ud83d\udc4f"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ResultGraph",src:n(7146).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ResultViewer",src:n(4299).Z})))}p.isMDXComponent=!0},4942:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AttractedSpheres-5f38731f9a9e084508a3ed7538f67752.png"},9140:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ConnectDistanceAndText-1026b4973a854623d2252c1a4974711f.png"},3732:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ConnectNumberAndSquare-e770a829137bba47a8465817bb169648.gif"},5688:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ConnectSquareAndDistance-246c4407ab8131ceed0d32756c28a8ef.png"},3236:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ConnectSquareAndSphere-8c16dc4a181295a9585307622379a0b1.png"},5279:function(e,t,n){"use strict";t.Z=n.p+"assets/images/DivideDistanceBy10-ad86450503cb89e90117fd424030b787.png"},8694:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Header-ccba83881dfd96d1670dba7af61a1054.png"},3846:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IOPreview-682e3ee9246ac85ede235216ff84656f.gif"},9860:function(e,t,n){"use strict";t.Z=n.p+"assets/images/MultiplyNumberAndNumberSlider-2f638fb630f0567299e5c1743ef79a71.png"},7146:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ResultGraph-e6b2dbade1478f41d790e05dcaabb938.png"},4299:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ResultViewer-5c47b72617647eba278c6c8a01fa3a1d.gif"},1724:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SearchAndAddSquareGrid-d6308d5dc9fe1302d1f1b7d1a8c208cd.gif"},4728:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SquareGridInspector-0aeeb336aa9ccbe44b4d3718c3a26d12.png"},1311:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SquareGridPreview-1f4c0f6fb15e0437b2a9f9b95a463dae.png"},6443:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SquareGridPreview2-ea0cf01c30fb826af083d2612b554b66.png"},7757:function(e,t,n){"use strict";t.Z=n.p+"assets/images/a4290ca91d4853463444601c27b35540-3635bab58d7b420d9e38a507b01a9af8.png"}}]);