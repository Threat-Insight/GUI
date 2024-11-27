import requests
import time

# Replace with your actual API URL
API_URL = 'http://localhost:5000/api/v1/scan'  
MAX_REQUESTS = 10

def test_rate_limit():
    for i in range(MAX_REQUESTS):
        response = requests.post(API_URL, json={"url": "http://example.com"})
        print(response.json)
        time.sleep(1) 

if __name__ == "__main__":
    test_rate_limit()
