import { useState } from "react";
import { useEffect } from "react";

export const Output = ({valu,fn,fn1,fn2,fn3,evalu})=>{
    console.log('valu',valu);
    const [postContent, setPostContent] = useState(`${valu}`);
    useEffect(() => {
        setTimeout(() => {
            setPostContent(`${valu}`);
        }, 1);
    });
    // const seeResult = (e)=>{
    //     ans1 = `${e.target.value}`;
    //     ans1 = ans1.substring(ans1.length-1,ans1.length);
    //     if(ans1==='0' || ans1==='1' || ans1==='2' || ans1==='3' || ans1==='4' || ans1==='5' || ans1==='6' || ans1==='7' || ans1==='8' || ans1==='9'){
    //         fn(ans1)
    //         // setPostContent(ans);
    //         console.log('ans ',ans1);
    //         console.log('postContent ',postContent);
    //     }
    //     else if(ans1==='+' || ans1==='-' || ans1==='/' || ans1==='*' || ans1==='%' || ans1==='.' || ans1==='(' || ans1===')'){
    //         fn(ans1)
    //         // setPostContent(ans);
    //         console.log('ans ',ans1);
    //         console.log('postContent ',postContent);
    //     }
    //     else{
    //         ans1 = '0';
    //         fn1(ans1);
    //         console.log('else running');
    //     }
    // }
    const handleKeyDown = (event) => {
        let ans1 = event.key;
        console.log('User pressed: ', event.key);
        if (ans1 === 'Backspace') {
          console.log('Backspace key pressed');
          ans1 = "0";
          //   setPostContent(ans1);
          fn1(ans1);
        }
        else if(ans1==='1' || ans1==='2' || ans1==='3' || ans1==='4' || ans1==='5' || ans1==='6' || ans1==='7' || ans1==='8' || ans1==='9'){
            if(valu==='0'){
                console.log('ans ',ans1);
                fn2(ans1);
            }
            else{
                fn(ans1);
                // setPostContent(ans);
                console.log('ans ',ans1);
                console.log('postContent ',postContent);
            }
        }
        else if(ans1==='0'){
            fn(ans1);
        }
        else if(ans1==='+' || ans1==='-' || ans1==='/' || ans1==='*' || ans1==='%' || ans1==='.'){
            fn3(ans1);
        }
        else if(ans1==='(' || ans1===')'){
            if(valu==='0'){
                console.log('ans ',ans1);
                fn2(ans1);
            }
            else{
                fn(ans1);
                // setPostContent(ans);
                console.log('ans ',ans1);
                console.log('postContent ',postContent);
            }
        }
        else if(ans1==='='){
            evalu();
        }
        else{
            //do nothing
        }
    };
    return(<textarea value={postContent} readOnly onKeyDown={handleKeyDown}/>);
}
