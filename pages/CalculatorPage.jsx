import { useState } from "react";
import { Button } from "../components/Button";
import { Output } from "../components/Output";

var ans = '0';
var myValue = 'false';
const CalculatorPage = ()=>{
    const [count, setCount] =  useState('0');
    const updateCount = (ans1)=>{
        ans = count+ans1;
        setCount(ans);
        console.log('count ',count);
        myValue = 'true';
    }
    const updateCount1 = (ans1)=>{
        console.log('~~~~~~',ans);
        setCount(ans + ans1);
        myValue = 'true';
    }
    const deleteCount = (ans1)=>{
        setCount(ans1);
        ans = ans1;
        myValue = 'false';
    }
    const setScreen = (ans1)=>{
        setCount(ans1);
        ans = ans1;
        myValue = 'true';
    }
    const evaluate = ()=>{
        try{
            setCount(eval(count));
            console.log(eval(count));
            ans = eval(count);
        }
        catch{
            setCount('Invalid Expression!');
            ans = 'Invalid Expression!'
            myValue = 'false';
        }
    }
    const newCount = (val)=>{
        if(val === '+'){
            setCount(ans+"+");
            myValue = 'true';
        }
        else if(val==='-'){
            setCount(ans+"-");
            myValue = 'true';
        }
        else if(val==='*'){
            setCount(ans+"*");
            myValue = 'true';
        }
        else if(val==='/'){
            setCount(ans+"/");
            myValue = 'true';
        }
        else if(val==='%'){
            setCount(ans+"%");
            myValue = 'true';
        }
        else if(val==='('){
            if(myValue==='true'){
                setCount(count+"(");
                ans = ans+"(";
            }
            else{
                setCount("(");
                myValue = 'true';
                ans = "(";
            }
        }
        else if(val===')'){
            if(myValue==='true'){
                setCount(count+")");
                ans = ans+")";
            }
            else{
                setCount(")");
                myValue = 'true';
                ans = ")";
            }
        }
        else if(val==='Clear'){
            setCount("0");
            ans = "0";
            myValue = 'false';
        }
        else if(val==='.'){
            setCount(ans+".");
            myValue = 'true';
        }
        else if(val==='0'){
            if(myValue==='true'){
                ans = count+"0";
                setCount(ans);
            }
            else{
                setCount("0");
                myValue = 'true';
            }
        }
        else if(val==='1'){
            if(myValue==='true'){
                ans = count+"1";
                setCount(ans);
            }
            else{
                setCount("1");
                ans = "1";
                myValue = 'true';
            }
        }
        else if(val==='2'){
            if(myValue==='true'){
                ans = count+"2";
                setCount(ans);
            }
            else{
                setCount("2");
                ans = "2";
                myValue = 'true';
            }
        }
        else if(val==='3'){
            if(myValue==='true'){
                ans = count+"3";
                setCount(ans);
            }
            else{
                setCount("3");
                myValue = 'true';
                ans = "3";
            }
        }
        else if(val==='4'){
            if(myValue==='true'){
                ans = count+"4";
                setCount(ans);
            }
            else{
                setCount("4");
                myValue = 'true';
                ans = "4";
            }
        }
        else if(val==='5'){
            if(myValue==='true'){
                ans = count+"5";
                setCount(ans);
            }
            else{
                setCount("5");
                myValue = 'true';
                ans = "5";
            }
        }
        else if(val==='6'){
            if(myValue==='true'){
                ans = count+"6";
                setCount(ans);
            }
            else{
                setCount("6");
                myValue = 'true';
                ans = "6";
            }
        }
        else if(val==='7'){
            if(myValue==='true'){
                ans = count+"7";
                setCount(ans);
            }
            else{
                setCount("7");
                myValue = 'true';
                ans = "7";
            }
        }
        else if(val==='8'){
            if(myValue==='true'){
                ans = count+"8";
                setCount(ans);
            }
            else{
                setCount("8");
                myValue = 'true';
                ans = "8";
            }
        }
        else if(val==='9'){
            if(myValue==='true'){
                ans = count+"9";
                setCount(ans);
            }
            else{
                setCount("9");
                myValue = 'true';
                ans = "9";
            }
        }
        else{
            console.log('ans is ',ans);
            try{
                setCount(eval(count));
                console.log(eval(count));
                ans = eval(count);
            }
            catch{
                setCount('Invalid Expression!');
                ans = 'Invalid Expression!'
                myValue = 'false';
            }
        }
    }
    const myStyle = {
        height : "500px",
        width : "600px",
        marginTop : "20px"
    };
    const rowStyle = {
        marginTop : "10px",
        height : "90px",
        marginBottom : "10px"
    };
    const myStyle2 = {
        height : "600px",
        width : "580px",
    };
    const rowStyle2 = {
        marginTop : "20px",
        height : "90px",
        marginBottom : "40px",
    };
    // const buttonStyle = {
    //     marginLeft : "40px",
    //     backgroundColor : "black"
    // };
    const rowStyle3 = {
        marginTop : "10px",
        height : "90px",
        marginBottom : "10px",
        width : "554px"
    };
    const newCss = {
        marginLeft : "155px"
    };
    return(
        <div className="container" style={myStyle2}>
            <div>
                <h1 style={newCss}>
                    Calculator
                </h1>
            </div>
            <div className="row" style = {rowStyle2}>
                <div className="row" style={rowStyle3}>
                    <Output valu={count} fn = {updateCount} fn1 = {deleteCount} fn2 = {setScreen} fn3 = {updateCount1} evalu = {evaluate}/>
                </div>
                <div className="container text-center" style={myStyle}>
                    <div className="row" style = {rowStyle}>
                        <Button fn = {newCount} val="(" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val=")" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="%" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="Clear" className="btn btn-light col-2 me-5"/>   
                    </div>
                    <div className="row" style = {rowStyle}>
                        <Button fn = {newCount} val="7" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="8" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="9" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="/" className="btn btn-light col-2 me-5"/>
                    </div>
                    <div className="row" style = {rowStyle}>
                        <Button fn = {newCount} val="4" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="5" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="6" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="*" className="btn btn-light col-2 me-5"/>
                    </div>
                    <div className="row" style = {rowStyle}>
                        <Button fn = {newCount} val="1" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="2" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="3" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="-" className="btn btn-light col-2 me-5"/>
                    </div>
                    <div className="row" style = {rowStyle}>
                        <Button fn = {newCount} val="0" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="." className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="=" className="btn btn-light col-2 me-5"/>
                        <Button fn = {newCount} val="+" className="btn btn-light col-2 me-5"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default CalculatorPage;