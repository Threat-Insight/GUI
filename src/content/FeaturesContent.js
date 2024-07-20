import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const FeaturesContent = (  
  <>
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>  
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>URL:</strong> The full URL string.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>UrlLength:</strong> The length of the entire URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>DomainLength:</strong> The length of the domain portion of the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfDots:</strong> The number of dots in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfHypens:</strong> The number of hyphens in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfUnderscores:</strong> The number of underscores in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfSlashes:</strong> The number of slashes in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfDigits:</strong> The number of digits in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfSpecialCharacters:</strong> The number of special characters (non-alphanumeric) in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfCaptialLetters:</strong> The number of capital letters in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfSubdomains:</strong> The number of subdomains in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>IsDomainIP:</strong> Whether the domain is an IP address.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>TLDLength:</strong> The length of the top-level domain (TLD).
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfDirectories:</strong> The number of directories in the URL path.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>PathEntropy:</strong> The Shannon entropy of the URL path.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NumOfParameters:</strong> The number of query parameters in the URL.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>QueryEntropy:</strong> The Shannon entropy of the URL query string.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>IsHTTPS:</strong> Whether the URL uses HTTPS.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>NoOfObusfucatedCharacters:</strong> The number of obfuscated characters in the URL (encoded as `%xx`).
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>HasTitle:</strong> Whether the URL's webpage has a title.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>Title:</strong> The title of the webpage (if available).
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>HasFavicon:</strong> Whether the URL's webpage has a favicon.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>HasCopyRightInfo:</strong> Whether the URL's webpage contains copyright information.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>HasURLRedirects:</strong> Whether the URL has redirects.
      </li>  
      <br />
      <li style={{ display: 'flex', alignItems: 'center' }}>  
        <IoCheckmarkDoneOutline style={{ color: '#66ff66', marginRight: '8px' }} /> <strong>label:</strong> The label indicating whether the URL is legitimate or phishing.
      </li>  
    </ul> 
  </>  
);  

export default FeaturesContent;
