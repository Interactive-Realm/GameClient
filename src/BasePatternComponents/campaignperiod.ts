import { Screen } from "./routes";

// Runs to see if todays date is within the campaign period, if not, show campaign start or end page
export function checkDate(startdate:Date,enddate:Date, setScreen: React.Dispatch<React.SetStateAction<Screen>>){
    
    // Set campaign start date
    const CampaignStartDate = startdate;

    // Set campaign end date, also set end time to 23:59
    const CampaignEndDate = new Date(enddate.getFullYear(), enddate.getMonth(), enddate.getDate(), 23, 59);

    // Set todays date
    const Today = new Date();

    // Condition: Today is within Campaign start and end date
    if(Today > CampaignStartDate && Today < CampaignEndDate)
        {
            setScreen("pregame");
        }
        
    // Condition: Today is before campaign start date
    else if(Today < CampaignStartDate)
        {
            setScreen("CampaignStart");
        }
    
    // Condition: Today is after the campaign end date
    else if(Today > CampaignEndDate)
        {
            setScreen("CampaignEnd");
        }

}