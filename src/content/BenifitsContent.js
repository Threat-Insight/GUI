import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const BenefitsContent = (  
  <>  
   <ul style={{ listStyleType: 'none', paddingLeft: 0, lineHeight: 1.6 }}>  
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px', minWidth: '24px' }} /> 
        <div>
          <strong>Enhanced Cybersecurity:</strong> A robust phishing detection system significantly reduces the risk of successful phishing attacks by identifying and blocking malicious URLs before users can interact with them.  
        </div>
      </li>
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px', minWidth: '24px' }} /> 
        <div>
          <strong>Protection of Sensitive Information:</strong> By preventing phishing attempts, sensitive information such as usernames, passwords, and financial details is safeguarded, reducing data breaches and identity theft incidents.  
        </div>
      </li>
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px', minWidth: '24px' }} /> 
        <div>
          <strong>Financial Loss Prevention:</strong> The economic impact of phishing can be devastating for individuals and organizations. A detection system minimizes the likelihood of financial losses associated with fraud and theft.  
        </div>
      </li>
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px', minWidth: '24px' }} /> 
        <div>
          <strong>Real-time Protection:</strong> Modern phishing detection systems often operate in real-time, providing immediate protection as users browse the internet or access their email, thus enhancing overall security.  
        </div>
      </li>
    </ul> 
    <p>
      It enhances cybersecurity by identifying malicious URLs before users can interact with them. This protection is crucial for safeguarding sensitive information such as usernames, passwords, and financial details, significantly reducing the risk of data breaches and identity theft. Additionally, by preventing phishing attempts, the system minimizes financial losses associated with fraud and theft. It also promotes increased user awareness through educational programs about phishing tactics and safe online practices. Lastly, modern systems provide real-time protection, ensuring immediate security as users browse the internet or access their email.
    </p> 
  </>  
);

export default BenefitsContent;
