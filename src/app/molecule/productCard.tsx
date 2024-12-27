import { Inputs } from "../atom/Inputs"

export const productCard = () =>{
    <div className="">
        <div className="">
            <img src="" alt="companyIcon"/>
        </div>
        <div className="">
            CompanyName <span>Job Posted</span>
        </div>
        <Inputs/> 
        {/* will map for every job category the job is related to */}
        <br/>
        <div className="">
            <div className="">
                JobPayRate 
                <div className="">
                    JobLocation
                </div>
            </div>
            <Inputs/>
            {/* apply now button */}
        </div>
    </div>
}