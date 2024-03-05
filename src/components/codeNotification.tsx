import {ReactComponent as Eye} from '../assets/eye.svg'
import {ReactComponent as Dots} from '../assets/dots.svg'
import {ReactComponent as Copied} from '../assets/approved.svg'
import {ReactComponent as CopyToClipboard} from '../assets/copyToClipboard.svg'
import { useCallback, useEffect, useState} from 'react';

type codeProps = {
    code?: number
}

const CodeNotification = ({code}: codeProps) => {

    // const [code, setCode] = useState<number>(123456)
    const [codeString, setCodeString] = useState<any>([])
    const [codeHide , setCodeHide] = useState<boolean>(true)
    const [codeCopied, setCodeCopied] = useState<boolean>(false)
    const [smallScreen, setSmallScreen] = useState<boolean>()
    const [expand, setExpand] = useState(false)

    // RERENDER THE COMPONENT WITH RESPECT TO SCREENSIZE CHANGES //////////////////////////
    useEffect(()=>{
        if(window.innerWidth < 768){
            setSmallScreen(true)
        }
        if(window.innerWidth > 768){
            setSmallScreen(false)
        }

        window.addEventListener('resize', componentRefresh)

        return () => {
            window.removeEventListener('resize', componentRefresh)
        }   
    }, [])

    const componentRefresh = useCallback(()=>{
        if(window.innerWidth < 768){
            setSmallScreen(true)
        }
        if(window.innerWidth > 768){
            setSmallScreen(false)
        }
    }, [])

    

    // STRINGIFY CODE FOR DISPLAY  ///////////////////////////////////////////////////
    useEffect(()=>{
        let codeStringConversion: any = code?.toString()
        codeStringConversion = codeStringConversion.split('')
        // codeStringConversion = codeStringConversion.join(' - ')
        setCodeString(codeStringConversion)
    }, [code])

    
    // COPY CODE TO CLIPBOARD /////////////////////////////////////////////////////////////
    function copy(){
        // navigator.clipboard.clear()
        navigator.clipboard.writeText(code? code.toString(): '');
        setCodeCopied(true)
    }

    useEffect(()=>{
        if(codeCopied){
            setTimeout(() => {
                setCodeCopied(false)
            }, 2500);
        }
        
    }, [codeCopied])

    return ( 
            <div className="w-full h-[70px] bg-[#e0edf8] rounded-[10px] py-[15px] px-3 md:px-6 flex justify-between items-center text-[#626262] mb-5">

                { !smallScreen && (<span className="text-[20px]">Code:</span>)}

                {/* CODE BOX //////////////////////////////////////////////////////// */}
                <div className={`w-auto max-w-[70%] md:max-w-[50%] h-auto pl-4 pr-9 md:pl-7 md:pr-12 
                rounded-[10px] border-[1px] border-[gray] text-[5vw] sm:text-[27px] font-bold relative`} 
                style={{whiteSpace: 'nowrap'}} onCopy={()=>{copy()}}>

                    {codeString.map((member: string, i: number)=>{
                        return(
                            !codeHide? // WHEN CODE IS NOT HIDDEN
                            i==2?`${member} \u00A0\u00A0`: // AT THE THIRD CODE NUMBER, THE HYPHEN IS REPLACED WITH SPACES
                            i==5?`${member}`: `${member} - `: // THE LAST CODE NUMBER DOES NOT INCLUDE HYPHENS OR SPACES
                            
                            i==2?`• • • `: // WHEN CODE IS HIDDEN
                            i==5?`• \u00A0`: `• • `
                        )
                    })}

                    <button className='w-9 md:w-12 h-full grid place-content-center absolute right-0 top-0'
                    onClick={()=>{copy()}}>
                        {!codeCopied && <CopyToClipboard className='scale-[0.7] md:scale-[1]'/>}
                        {codeCopied && (<Copied fill='#6484E6' className='scale-[1] md:scale-[1.5]'/>)}
                    </button>
                    
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-[5%] w-[auto] text-[14px]">

                    <button className='rounded-[10px] border-[0px] md:border-[1px] border-[#ffd50180]  px-[10px] py-[7px] grid place-content-center' onClick={()=>{setCodeHide(!codeHide)}}>
                        <Eye className='scale-[0.7] md:scale-[1]'/>
                    </button>
                    { smallScreen &&  (<button className='rounded-[10px] border-[0px] border-[#FFD60180] md:border-[1px] px-[10px] py-[7px] grid place-content-center relative z-[99]'
                    onClick={()=>{setExpand(!expand)}}>
                        <Dots />

                        {expand && (<div className='absolute w-auto top-[100%] bg-white left-[50%] translate-x-[-50%] rounded-[10px] shadow-lg'>
                            <button className='rounded-[10px] border-[0px] border-[#FFD60180] md:border-[1px] px-[10px] py-[7px] grid place-content-center'>
                                Reset
                            </button>
                            <button className='rounded-[10px] border-[0px] border-[#FFD60180] md:border-[1px] px-[10px] py-[7px] grid place-content-center'>
                                Check
                            </button>
                        </div>)}
                    </button>)}
                    { !smallScreen &&  (<button className='rounded-[10px] border-[0px] border-[#FFD60180] md:border-[1px] px-[10px] py-[7px] grid place-content-center'>
                        Reset
                    </button>)}
                    { !smallScreen &&  (<button className='rounded-[10px] border-[0px] border-[#FFD60180] md:border-[1px] px-[10px] py-[7px] grid place-content-center'>
                        Check
                    </button>)}

                </div>

            </div>
     );
}
 
export default CodeNotification;