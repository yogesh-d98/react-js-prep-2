                                            React component life cycle:
----------------------------------------
component :                                                  
 export default function Component(){   
        return(
        <></>
    );                                           
 };

 returns jsx ==> javascript+xml

 contains : 
 *const , var , let
 *hooks
 *states

--sharing these datas to react--
=====>

 REACT
 
 =====> 
 
 creates lifecycle 
 
 ====>

 ** 1st process : component mounting (component get load)
     - all codes will run here
           *assignment statements
           *initialization
           *state variables assigning
           *returns jsx 

** after mounting the jsx will move to VIRTUAL DOM

** updates to Actual DOM

** user will see the output through browsers

**schedules useEffect along with cleanup function [COMPONENT RE RENDER]

===>

**2nd process : update  
     - all codes will run 
     -state var got updated
     -returns jsx

** after the jsx will move to VIRTUAL DOM

** updates to Actual DOM

** user will see the output through browsers 

===>

**3rd process: unmount
    - releases memory
    - clean up
** after the it will move to VIRTUAL DOM

