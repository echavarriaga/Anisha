# Anisha
The **Anisha** is to build two XML-based DSLs for animating basic shapes using [PsiXML Interpreter and PsiEngine](http://hilas.ii.uam.es/api). 
The case of study will be used as an illustrative example, which details the interpretation and execution 
processes of multiple programs as well as the information binding in [PsiEngine](http://hilas.ii.uam.es).

## Goal

The goal of *Anisha* is to build two DSLs for animating basic shapes. The *Anisha* case study has had as main objective to illustrate some 
**PsiXML Interpreter** features, called *PsiXML*. Firstly, this case study allows us to validate the heterogeneous source information 
(XML and JSON) binding. This feature gives versatility to the XML-based languages in *PsiXML*. Secondly, Anisha let us test the coexistence 
of multiple Psi languages as well as the feature of runing multiple Psi programs with ease information exchange and functionality sharing. 
In general, *PsiXML* allow creating XML-based DSL with a high level of abstraction, easy to understand, extendable and combinable.

## Shapes Component

### ShapesPsi Grammar
The ShapesPsi Language is a DSL that follows an XML-based grammar for creating circles and rectangles. The Figure 1 shows the *Psi Language Structure Diagram* 
(**PsiLSD**) of the ShapesPsi Language.<br>

![PsiLSD of the ShapesPsi Language](images/fig1.png)
*Figure 1*. PsiLSD of the ShapesPsi Language. 

## Running the examples

The next XML file program shows a code example written in **ShapesPsi** language. In this code we can see how to create a red circle with centre at point (100, 100), Circle tag, radius 30 (all units in pixels), and a blue rectangle with centre at point (250, 100), Rectangle tag, weight 20 and high 10. Evaluation can be seen here.