---
title: Research
toc: true 
preamble: The mission of MERGe Lab is to build better robots through intentional design of their bodies. As robots are deployed outside of the lab and the factory, they will encounter a wide range of human environments and contexts. We focus our core research on **sensor and actuator design**, as these are the main ways that robots interact and perceive their environment. <p></p> {{< img src="img/thesisTree.png" alt="Research Map of MERGe Lab. The core research of MERGe Lab is building sensors and actuators. This research draws on fundamentals of math, design studies, disability justice and materials science. It has applications in medical devices and robot manipulation" class="small-figure" >}} Following our philosophy of seeing what robots *emerge* from *merging* disciplines, we investigate both the fundamental science needed to improve current sensors and actuators, as well as directly applying the sensors and actuators we create to real-world applications.
---

# Active Projects
## Fundamentals: (Meta)material Design for Robot Hardware
*Primary students: David B., Emiliano, Zach*
{{< img src="img/matsci.png" alt="Flowchart of current materials vs. our proposed material approach. Biological materials have a continuous gradient of material properties from bone to tendons to muscles. However, current robot joints are either revolute joints that require assembly or monolithic flexures that require ductility. We propose creating a smooth gradient approach more similar to biology" class="small-figure" >}}

The materials that a robot's body is made of has significant downstream effects on the robot's overall mechanical behavior and end performance. Thus, we are investigating how modifying the mechanical properties of a robot's materials creates more effective robot designs. Our lab is pursuing two approaches: (1) multi-modulus 3D printing to print robots with continuous stiffness gradients, in collaboration with the [ZAP Research Group](https://www.zpagegroup.com) and (2) using geometry as a design variable by making robots out of [mechanical metamaterials](https://en.wikipedia.org/wiki/Mechanical_metamaterial) / [architected materials](https://www.annualreviews.org/doi/10.1146/annurev-matsci-070115-031624). We are particularly interested in fusing these two approaches into one coherent design philosophy, as it is currently an open question of which properties are better achieved through material vs. geometric formulations. 

## Fundamentals: Computational Design of Robot Hardware
*Primary students: Bill, Andrew, Tanish*
{{< img src="img/rhinoHSA.png" alt="Render of a handed shearing auxetic in the Rhino software" class="small-figure" >}}

Since many of our core sensors and actuators are based off of 3D printing, we have significantly more design control over a structure's geometry, including sensor placement and layout. While we have demonstrated many promising examples of manually-designed [fluidically innervated](https://www.science.org/doi/full/10.1126/sciadv.abq4385) structures, leveraging computational methods and simulation offers enormous potential to create [optimized robots](https://ieeexplore.ieee.org/abstract/document/9345345). We are currently building parameterized models of our metamaterial actuators, as well as soft body simulations of our fluidically innervated sensors, enabling us to explore automatic routing and layout of our structures.

## Applications: Hardware Design for Contact-Rich Manipulation
*Primary students: Siqi, Benito, Joseph, Manav*
{{< img src="img/forte2025.png" alt="Cutaway view of a finray gripper. There are empty air channels along the front and back sides of the gripper. Each front-back pair of channels connects to a differential pressure sensor" class="small-figure" >}}

Although current robots can do impressive grasping tasks with rigid grippers and computer vision, they still lack the contact-rich dexterity seen in human manipulation. We are working to create the hardware platforms that will enable systematic investigation needed to achieve complex manipulation. This ranges from incorporating high-resolution tactile sensors into grippers to creating multi-fingered robotic platforms that allow direct comparison of different hand layouts. Our tactile sensorization efforts have led to significant advances in manipulation, including manipulating submerged objects across the air-water interface. [Our sensors](https://merge-lab.github.io/FORTE/) can accurately **measure grasping forces from 0-8 N with an average error of 0.2 N with a sample rate of 2 kHz**, enabling perception of fast slip events (within 100 ms). 


## Applications: Sensor Design for Human(oid) Movement
*Primary students: David G., Aryaman, Caroline, Aileen*
{{< img src="img/biorob.png" alt="A person performs a bicep curl while wearing a force-sensing pad. At extension, the pad reads 600 pascals, but in flexion, the pad reads 1200 pascals" class="small-figure" >}}

As robots increasingly move towards humanoid form factors, wearable devices that can measure human movement become increasingly more important, whether for data capture or for clinical applications. Sensors that can pick up desired signals across the diverse range of human(oid) morphologies are particularly challenging to create, especially given portability and interface concerns. We are building force sensors for humans and robots alike, ranging from shoes to protective sports equipment to [lower-limb exoskeletons](https://arxiv.org/abs/2602.13436). We are actively collaborating with [dancers](https://theatredance.utexas.edu/profile/emoghene-sinclair) and [kinesiologists](https://sites.edb.utexas.edu/hll/) to better match the performance needs of expert human movements. 

{{< small_hr >}}

# Up-and-Coming Projects
We are always on the lookout for new fields and techniques to *merge* into our research approach. Some current student-led directions include:
1. Bio-inspired design for sensors and actuators (Jax)
2. Ethnographic investigation of the roboticist "supply chain" (Bill) 

Some areas of interest for the PI include:
1. Design of foldable mechanisms, leveraging our mathematical understanding of origami and rigidity theory to create more generalized families of designs
2. Sensorized phantoms that mimic biological tissue's mechanical properties and provide sensorized feedback to clinicians, caregivers and patients
3. Co-design of assistive technologies, especially in ways that further [design justice](https://designjustice.mitpress.mit.edu) and [disability justice](https://catalystjournal.org/index.php/catalyst/article/view/29607) 


{{< small_hr >}}

# Previous Projects

Our systems have [outperformed similar soft robots](https://dspace.mit.edu/bitstream/handle/1721.1/116908/Chin-2018-robosoft_HSA_hands.pdf?sequence=1&isAllowed=y) in power efficiency (20x more efficient) and speed (2x faster), [outperformed similar modular robots]() in locomotion (10x faster) while maintaining a high strength-weight ratio (76x), and [created the largest sensorized soft robotic dataset](https://www.science.org/doi/full/10.1126/sciadv.abq4385) (18 hours).

## Modular Volumetric Actuators (Auxbots)
{{< img src="img/auxbots.png" alt="Three spherical robots, each made of complex metal linkages." class="small-figure" >}}
Auxetics are materials with a negative Poisson's ratio. Unlike, say, a rubber band, which gets skinnier as you stretch it, auxetic materials get thicker as you stretch them due to their internal geometry. In this project, we applied actuation directly to a [spherical auxetic shell](https://ieeexplore.ieee.org/abstract/document/8968187) to create modular robots with motor-driven volume expansion (Auxbots). By controlling the shell's geometry, we could create robots optimized for speed and expansion ratio (390\% volume expansion in 0.2 seconds) or for [force output](https://ieeexplore.ieee.org/abstract/document/9976216) (135 N max, or **76x strength-weight ratio**, one of the highest ratios of any modular robot). We could explicitly make trade-offs between stiffness, speed, and force as a direct consequence of how the geometric parameters affect the overall system behavior.

We then connected multiple auxbots together for more complex actuation, similar to how biological cells come together to form tissues and organs. With the speed and size optimized auxbots, we created a 2x2x2 cube that could move forward, turn, and flip, due to the high impulse response. Meanwhile, with the force optimized auxbots, we created a flipper-like locomotion by tying adjacent auxbots together with a wire. This simultaneous lifting and bending action led to a seven-bot quadruped that could **carry loads up to 1.5x its total weight (2 kg), even with some auxbots stalling out**. Auxbots thus demonstrate not only how geometry gives greater control of robot performance but also offers a potential pathway to address the gap between simulation and reality.

## Handed Shearing Auxetics (HSAs)
{{< img src="img/hsa.png" alt="A tube with a diagonal pattern twists and expands linearly outwards." class="small-figure" >}}
Normal auxetics expand until they reach a symmetric point. After that point, further expansion leads to a collapse down to their mirror image. By contrast, we discovered a materials called handed shearing auxetics (HSAs) that have a chirality. Thus, if a left-handed and a right-handed HSA are rotated against one another, they will fight against the other's rotation and "lock-in" their position. 

This approach enabled us to create several soft robots just by changing the geometric structure. We created a 4 degree-of-freedom robotic platform directly from HSAs by placing opposite handed HSAs in a 2x2 grid and attaching a motor to each HSA. Similar high degree-of-freedom platforms would require significantly more infrastructure, like the six prismatic joints needed for a Stewart platform. Likewise, we created robotic fingers from the HSAs by drawing a line through the pattern. This line would act as a strain-limiting layer, forcing the entire structure to bend inwards. Since the [HSA gripper](https://dspace.mit.edu/handle/1721.1/116908) is motor-driven, it is **2x faster at opening and closing, 20x more power efficient**, and occupies a smaller footprint than standard soft pneumatic-based grippers, all while maintaining a similar grasping performance. 

