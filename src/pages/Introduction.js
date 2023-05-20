import {React, forwardRef, useEffect,useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import Equation from './Equation';

const Introduction = ({}, ref) => {
    const tableStyle = {
        width: "80px",
        textAlign: "center",
        border: '1px solid black',
          borderCollapse: 'collapse',
      };

    const frameLine = {
        table: {
          border: '1px solid black',
          borderCollapse: 'collapse',
          margin: '35px',
          padding: '20px'
        },
        th: {
          
        },
        td: {
          border: '1px solid black',
          borderCollapse: 'collapse',
          textAlign: "left"
        },
    };

    const formulaStyle = {
        display: 'inline',
    };

    const equation1 = `f(x) = a_0 + a_1x + \\ldots + a_nx^n`;
    const equation2 = `a_0,a_1,\\ldots. \ a_n`;
    const equation2_5 = `a_n\\neq0`;
    const equation3 = `1.\  n \\medspace is \\medspace called \\medspace the \\medspace degree,`;
    const equation4 = `2.\ \ c\ \\medspace are \\medspace called \\medspace the \\medspace coefficients`;
    const equation5 = `3.\ \ a_0\ \\medspace is \\medspace called \\medspace the \\medspace constant \\medspace terminology`;
    const equation6 = `f(1)=2,\\medspace f(2)=5,\\medspace and\\medspace f(4)=2. \\ `;
    const equation7 = `2=a+b \\times 1+c \\times1^2`;
    const equation8 = `5=a+2b+4c`;
    const equation9 = `2=a+4b+16c`;
    const equation10 = `\\left(x_0,\\ y_0\\right),\\ 
    \\left(x_1,\\ y_1\\right),\\ 
    \\ldots,\\ 
    \\left(x_n,\\ y_n\\right),\\ 
    \\text{where } x_0,\\ \\ldots,x_n`;
    const equation11 = ``;
    const equation12 = `f\\left(x_i\\right)=y_i\\ \\text{for}\\ 0\\le i\\le n`;
    const equation13 = `∆^2f`;
    const equation14 = `∆^3f`;
    const equation15 = `∆^4f`;
    const equation16 = `\\frac{{(x-x_0)}}{{∆x}}=\\frac{{(x-0)}}{{\\frac{1}{5}}}=5x`;
    const equation17 = `f(0.73)=0.423+\\frac{{(1.65)(0.65)}}{{2!}}(0.085)+
    \\frac{{(1.65)(0.65)(-0.35)}}{{3!}}(0.096)+\\frac{{(1.65)(0.65)(-0.35)(-1.35)}}{{4!}}(0.211)`;
    const equation18 = `=0.423+0.4306+0.0456-0.0060+0.0045=0.8977`;

    


    
    return(
        
        <div className="container">
            <h2 ref={ref}>Introduction</h2>
            <br/>
                <h3>Numerical Interpolation (interpolation polynomial)</h3>
                <br/>
                <p>The process of fitting a function through given data is called interpolation.</p>
                <p>Usually when we have data, we don’t know the function <Equation math= "f(x) \ " /> that generated the data. So we fit certain class of functions.</p>
                <p>The most usual class of functions fitted through data are polynomials. We will see why polynomials are fitted through data when we don’t know <Equation math= "f(x) \ " />.</p>
                <img alt="Flowers in Chania" height="345" src="https://cdn.britannica.com/13/3113-004-19196621/function-interpolation-values-points-polynomial-polynomials-sets.jpg" width="460"></img>

                <br/><br/>
                
                <p>Polynomials are often used because they have the property of approximating any continuous function.</p>
                <p>Given:</p>
                <p>◦ <Equation math= "f(x)" /> continuous on <Equation math= "[a, \ b]" /></p>
                <p>◦ <Equation math= "\varepsilon>0 \ " />
                (called tolerance)</p>
                <p>Then, there is a polynomial <Equation math= "P(x)" /> of appropriate degree which approximates the function within the given tolerance.</p>
                <br/>


                <p>Here we shall work with polynomials. These are functions with the following form:</p>
                <BlockMath math={equation1} />

                <p>where <Equation math= " n \ " /> is any nonnegative integer,</p>
                <BlockMath math={equation2} />
                <p>are any fixed numbers, with</p>
                <BlockMath math={equation2_5} />
                <p>Here are some terminology related to polynomials:</p>

                <div style={frameLine.table}>
                <table>
                <tr>
                
                    <td >1. <Equation math= "n \ " />is called the degree,</td>
                </tr>
                <tr>
                    <td>2. <Equation math= "a_0,a_1, \ldots .\ a_n \ " />are called the coefficients</td>
                </tr>
                <tr>
                    <td>3. <Equation math= "a_0 \ " />is called the constant terminology</td>
                </tr>
                </table>
                </div>
                <p>Polynomials have many uses in mathematics. Here we shall learn about polynomial interpolation. The following example introduces this.</p>
                <h4>EXAMPLE:</h4>
                <p>Suppose that <Equation math= "f(x)" /> is a polynomial of degree 2 with 
                <Equation math= {equation6}  />  
                Find the formula of <Equation math= "f(x)" />.</p>
        
                <br/><br/>
                <p>SOLUTION: Since <Equation math= "f(x)" /> has degree 2, it must be of the form <Equation math= "f(x)=a+bx+cx^2" /></p>
                <p>where the coefficient a,b,c are to be determined. Since <Equation math= "f(1)=2" /></p>
                <BlockMath math={equation7} />    

                <p>Similarly, we get two other equations:</p>
                <BlockMath math={equation8} />    
                <BlockMath math={equation9} />    

                <p>Solving all the three equations together we get <Equation math= "a = -4, \ b = 15/2, \ c = -3/2" />
                    .</p>
                <p>In this example we say that f interpolates the three points <Equation math= "(1,2), \ (2,5) \ " />and 
                <Equation math= " \ (4,2)" />
                    .</p>
                <p>We also call <Equation math= " f" /> an interpolating polynomial for this set of 3 points.</p>
                <p>Here we see that there is exactly one polynomial of degree 2 that interpolates these 3 points. A polynomial of degree 2 has <Equation math= "2+1=3 \ " />
                     unknown coefficients, <Equation math= "a, \ b \ " />and <Equation math= "c\ " /></p>
                <p> We solved for these from the 3 equations. This can be generalized to the following theorem.</p>
                <br/>

                <b>Theorem</b>
        <div style={frameLine.table}>
            <p>Suppose that we have <Equation math= "n+1 \ " /> points:</p>
            <BlockMath math={equation10} />  

                <p>are distinct numbers (no such condition on the <Equation math= "y_i' s. \ " />
                     

                Then there is exactly one polynomial <Equation math= "f \ " /> of degree <Equation math= "\leq n \ " /> that interpolates these <Equation math= "n+1 " /> points, i.e.,
                <BlockMath math={equation12} />  
            </p>
        </div>

        <h3>Interpolation Using Equally Spaced Points</h3>
        <p>
        If the <Equation math= "x " />-values are evenly spaced, getting an interpolating polynomial is considerably simplified. Instead of using divided differences, "ordinary differences" are used; the differences in <Equation math= "f " />-values are not divided by the differences in x-values. A delta symbol is used to write them and, for a table of <Equation math= "N + 1 (x, f(x)) \ " />
         pairs, differences up to the Nth order can be computed.
      </p>
      <br />
      <p>
        We suppose that the table has entries indexed from 0 to <Equation math= "N \ " />. First-order differences are then written as <Equation math= "∆f_i \ " /> and are computed as
      </p>
      
      <BlockMath math="∆f_i=f_{i+1}-f_i,\ i=0" />
      <p>
        Second-order differences, <Equation math= "∆^2fi \ " />, are the differences of the first-order differences:
      </p>
      <BlockMath math="∆^2f_i=∆(∆f_{i+1}-∆f_i)" />
      <p>
        which is easily shown to be
      </p>
      <BlockMath math="∆f_i=f_{i+2}-2f_{i+1}+f_i, i = 0, \dots, (N − 2)." />
      <p>
        Higher-order differences are again the differences of the next lower-order differences. They can be computed from the original f-values:
      </p>
      <BlockMath math="∆^nf_{i}=f_{i+n}-nf_{i+n-1} \frac{n(n-1)}{2!}f_{i+n-2}-\dots\pm f_{p}, \ i=9, \dots, (N−n)." />
      <br />
      <p>
        An interpolating polynomial of degree n can be written in terms of these ordinary differences, with x evaluated at x:
      </p>
      <BlockMath math="p_n(x)=f_o+\frac{x-x_0}{∆x}∆f_o+\frac{\frac{(x-x_0)}{∆x}(\frac{x-x_0}{∆x}-1)}{2!}∆^{2}fo+\frac{\frac{(x-x_0)}{∆x}(\frac{(x-x_0)}{∆x}-1)(\frac{(x-x_0)}{∆x}-2)}{3!}∆^{3}fo \\  +\dots+ \frac{\frac{(x-x_0)}{∆x}(\frac{(x-x_0)}{∆x}-1)\dots(\frac{(x-x_0)}{∆x}-n+1)}{n!}∆^{n}fo" />
      <p>
        This form of the interpolating polynomial is called the Newton-Gregory forward polynomial.
      </p>
        <br/>

        <h4>Example:</h4>
            <p>Given this table of <Equation math= "x, f(x) \ " />
                 values, and the columns of differences, find <Equation math= "P_4 \ " /></p>
            
            <table style={frameLine.table}>
                <tr>
                    <td style={tableStyle}>x</td>
                    <td style={tableStyle}>f (x)</td>
                    <td style={tableStyle}>∆f</td>
                    <td style={tableStyle}><BlockMath math={equation13} /></td>
                    <td style={tableStyle}><BlockMath math={equation14} /></td>
                    <td style={tableStyle}><BlockMath math={equation15} /></td>
                </tr>
                <tr>
                    <td style={tableStyle}>0.0</td>
                    <td style={tableStyle}>0.000</td>
                    <td style={tableStyle}>0.203</td>
                    <td style={tableStyle}>0.017</td>
                    <td style={tableStyle}>0.024</td>
                    <td style={tableStyle}>0.020</td>
                </tr>
                <tr>
                    <td style={tableStyle}>0.2</td>
                    <td style={tableStyle}>0.203</td>
                    <td style={tableStyle}>0.220</td>
                    <td style={tableStyle}>0.041</td>
                    <td style={tableStyle}>0.044</td>
                    <td style={tableStyle}>0.052</td>
                </tr>
                <tr>
                    <td style={tableStyle}>0.4</td>
                    <td style={tableStyle}>0.423</td>
                    <td style={tableStyle}>0.261</td>
                    <td style={tableStyle}>0.085</td>
                    <td style={tableStyle}>0.096</td>
                    <td style={tableStyle}>0.21l</td>
                </tr>
                <tr>
                    <td style={tableStyle}>0.6</td>
                    <td style={tableStyle}>0.684</td>
                    <td style={tableStyle}>0.346</td>
                    <td style={tableStyle}>0.181</td>
                    <td style={tableStyle}>0.307</td>
                    <td></td>
                </tr>
                <tr>
                    <td style={tableStyle}>0.8</td>
                    <td style={tableStyle}>1.030</td>
                    <td style={tableStyle}>0.527</td>
                    <td style={tableStyle}>0.488</td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                </tr>
                <tr>
                    <td style={tableStyle}>1.0</td>
                    <td style={tableStyle}>1.557</td>
                    <td style={tableStyle}>1.015</td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                </tr>
                <tr>
                    <td style={tableStyle}>1.2</td>
                    <td style={tableStyle}>2.572</td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                    <td style={tableStyle}></td>
                </tr>
            </table>

            <br/>
            <p>The <Equation math= "∆x = 0.2 = \frac{1}{5} \ " />
                , so </p>
            <BlockMath math={equation16} />
            <br/>
            <BlockMath math="P_{4}(x) = 0 + 5 \times (0.203) + \frac{5 \times (5x-1)}{2!}(0.017) + \frac{5 \times (5x-1)(5x-2)}{3!}(0.024) + \frac{5 \times (5x-1)(5x-2)(5x-3)}{4!}(0.020)\\
            = 0.104x^3 - 0.048x^2 + 0.422x + 0.0375
            
            " />
        
            <br/>
            <h4>Example:</h4>
            <p>Find <Equation math= "f(0.73) \ " />
                 from a cubic interpolating polynomial.</p>
            <br/>
            <p>In order to center the <Equation math= "x \ " />-values around <Equation math= "x = 0.73 \ " />, we must use the four entries beginning
            with <Equation math= "x = 0.4 \ " /> and <Equation math= "∆x = 0.2 = \frac{1}{5} \ " />. That makes <Equation math= "x_o = 0.4 \ " />and 
            <BlockMath math="s = \frac{{(0.73 - 0.4)}}{{0.2}}=1.65" />
             Inserting the proper
            values into the expression for the Newton-Gregory polynomial, we get </p>
            
            
            <BlockMath math={equation17} />
            <BlockMath math={equation18} />


        
            <br/><br/>
        </div>
        
    )
}

export default forwardRef(Introduction);
