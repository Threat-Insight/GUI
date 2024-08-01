import React from "react";
import "../css/components-css/URLBase.css";
import CodeSnippet from "./CodeSnippet";
import WhyCard from "./WhyCard";
import Strategy from "../img/WhyUs/strategy.png";
import Database from "../img/WhyUs/database.png";
import Traits from "../img/WhyUs/traits.png";

const URLBase = () => {
  const handleDownload = () => {
    window.location.href = "http://localhost:5000/feeds";
  };
  return (
    <>
      <div className="scan-logs">
        <h2 className="logs-header">URL Base</h2>
      </div>
      <div className="base-content">
        <div className="introduction">
          <p className="intro-header">
            <span>I</span>ntroduction
          </p>
          <p className="intro-title">
            In the ever-evolving landscape of cybersecurity, staying ahead of
            phishing threats is crucial. Phishing attacks are becoming
            increasingly sophisticated, targeting users through deceptive URLs
            that mimic legitimate websites. To effectively combat these threats,
            robust AI-based phishing detection systems are essential.
          </p>
        </div>
        <div className="why-us">
          <p className="intro-header">
            <span>W</span>hy Us ?
          </p>
          <div className="grid grid-three" style={{ gap: "36px" }}>
            <WhyCard
              source={Strategy}
              alt="Varied Phishing Strategies"
              heading="Varied Phishing Strategies."
              content="Our URLs span sources, covering fake logins and deceptive links, offering a broad range of phishing attempts for your AI."
            />
            <WhyCard
              source={Database}
              alt="Regularly Updated Database"
              heading="Regularly Updated Database."
              content="Our regularly updated phishing URLs keep your AI model exposed to the latest threats and most relevant phishing tactics."
            />
            <WhyCard
              source={Traits}
              alt="Phishing Trait Coverage"
              heading="Phishing Trait Coverage."
              content="Our URLs include suspicious domains, unusual structures, and common phishing keywords, helping your AI model understand potential threats."
            />
          </div>
        </div>
        <div className="getting-started">
          <p className="intro-header">
            <span>G</span>etting Started
          </p>
          <p className="intro-title" style={{ marginBottom: "18px" }}>
            To start using our phishing URLs for training your AI models, simply
            follow the guidelines on how to integrate them into your training
            process. If you have any questions or need further assistance, our
            support team is here to help.
          </p>
          <p className="intro-title" style={{ margin: "0 0 36px 0" }}>
            The provided code demonstrates how to extract key features from
            URLs. To enhance accuracy and build a more sophisticated detection
            system, you can modify and extend the feature extraction process.
            Customize the code as needed to tailor it to your requirements, and
            leverage these features to develop a robust AI model for advanced
            phishing detection.
          </p>
          <CodeSnippet
            codeString={`def extractFeatures(label : str, url : str) -> dict:
    '''
    Extract the features from url and assign label as 0 or 1.
    0 ---> Phishing
    1 ---> Legitimate
    Returns the features extracted.
    '''
    try:
        features = {}
        parseUrl = urlparse(url)
        domainInfo = tldextract.extract(url)
        queryParameters = parse_qs(parseUrl.query)
        features['URL'] = url
        features['UrlLength'] = len(url)
        features['DomainLength'] = len(parseUrl.netloc)
        features['NumOfDots'] = url.count('.')
        features['NumOfHypens'] = url.count('-')
        features['NumOfUnderscores'] = url.count('_')
        features['NumOfSlashes'] = url.count('/')
        features['NumOfDigits'] = sum(c.isdigit() for c in url)
        features['NumOfSpecialCharacters'] = len(re.findall(r'[^\\w\\s]', url))
        features['NumOfCaptialLetters'] = sum(1 for c in url if c.isupper())
        features['NumOfSubdomains'] = len(domainInfo.subdomain.split('.'))
        features['IsDomainIP'] = int(re.match(r'^\\d{1,3}(\\.\\d{1,3}){3}$', parseUrl.netloc) is not None)
        features['TLDLength'] = len(domainInfo.suffix)
        features['NumOfDirectories'] = len(parseUrl.path.split('/')) - 1
        features['label'] = label
    except Exception:
        pass
    return features
          `}
          />
          <CodeSnippet
            codeString={`def constructDataSet(newFile : str) -> bool:
    '''
    Construct the dataset using the extracted features for both Phishing and Legitimate URLs.
    '''
    all_features = []
    first_write = checkDataSet('yourDataSet.csv')
    with open(newFile, 'r') as file:
      for line in file:
        label, url = line.strip().split(maxsplit=1)
        features = extractFeatures(label, url)
        all_features.append(features)
          if first_write:
            pd.DataFrame([features]).to_csv('yourDataSet.csv', index=False, mode='a', header=True)
            first_write = False
          else:
            pd.DataFrame([features]).to_csv('yourDataSet.csv', index=False, mode='a', header=False)
    return True
            `}
          />
        </div>
        <div className="cta">
          <p className="intro-header">
            <span>C</span>ode In <span>Action</span>
          </p>
          <p className="intro-title" style={{ marginBottom: "16px" }}>
            In this section, you can obtain essential phishing URLs to enhance
            your cybersecurity measures. By clicking the button below, you can
            download the latest dataset of phishing URLs, which is crucial for
            training and refining your AI-based detection systems. Our
            comprehensive collection includes a variety of phishing attempts,
            sourced from multiple channels to ensure a broad coverage of
            potential threats. This dataset is updated regularly to reflect
            current phishing tactics, providing your AI model with up-to-date
            and relevant data for optimal performance.
          </p>
          <button className="download-urls" onClick={handleDownload}>
            Get URLs
          </button>
        </div>
      </div>
    </>
  );
};

export default URLBase;
