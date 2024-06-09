# OpenAI JSON Converter SaaS API

## Overview

This project is a Next.js application that leverages OpenAI's powerful language model to convert any given data into JSON format. It also provides a SaaS API to allow developers to integrate this functionality into their own applications.

## Features

- **Data Conversion**: Convert various types of data into JSON format using OpenAI.
- **SaaS API**: Provide an API for external applications to access the data conversion functionality.
- **User-Friendly Interface**: Simple and intuitive interface for inputting data and retrieving JSON-formatted results.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn
- OpenAI API Key

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/openai-json-converter.git
    cd openai-json-converter
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env.local` file in the root directory and add your OpenAI API key:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### API Documentation

The SaaS API allows external applications to convert data to JSON. 

#### Endpoint

POST /api/json

#### Request

- **Headers**: 
    - `Content-Type`: `application/json`
    - `Authorization`: `Bearer YOUR_API_KEY`
- **Body**:
    ```json
    {
        "data": "Your data here"
    }
    ```

#### Response

- **Success**:
    ```json
    {
        "status": "success",
        "json": { ... }
    }
    ```

- **Error**:
    ```json
    {
        "status": "error",
        "message": "Error message here"
    }
    ```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).


