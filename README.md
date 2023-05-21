MiniURLs
MiniURLs is a URL shortening service that allows users to create shortened links for long URLs. It provides both random short links
and custom short links based on user preferences.

Deployment
The project is deployed and accessible at: https://shrt-jivs.onrender.com/short for generating random short links
and https://shrt-jivs.onrender.com/custom for generating custom short links.

Random Short Link Generation
To generate a random short link, follow these steps:

Send a POST request to the endpoint https://shrt-jivs.onrender.com/short using a tool like Postman.
In the body of the request, provide the longUrl in JSON format:
json

{
  "longUrl": "https://example.com/your-long-url"
}
Submit the request and receive a response containing the shortened link:
json

{
  "shortUrl": "https://shrt-jivs.onrender.com/abc123"
}
Custom Short Link Generation
To generate a custom short link, follow these steps:

Send a POST request to the endpoint https://shrt-jivs.onrender.com/custom using a tool like Postman.
In the body of the request, provide the longUrl and shortUrl in JSON format:
json

{
  "longUrl": "https://example.com/your-long-url",
  "shortUrl": "https://shrt-jivs.onrender.com/custom-link"
}
Note: Make sure the shortUrl is unique and available.
Submit the request and receive a response confirming the custom short link creation:
json

{
  "message": "Custom short link created successfully"
}
Technologies Used
Node.js: A JavaScript runtime used for building the server-side logic and API endpoints.
Express.js: A web application framework for Node.js, used for creating robust and scalable web APIs.
MongoDB: A NoSQL database used for storing and managing the URLs and their shortened counterparts.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a simple and elegant way to interact with the database.

Contributing
Contributions to MiniURLs are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


Acknowledgments
The MiniURLs project was inspired by the need for a simple and efficient URL shortening service.
Special thanks to the open-source community for their contributions and resources that facilitated the development of this project.
Feel free to modify and expand on this README file to provide more details about your project and its specific functionalities.
