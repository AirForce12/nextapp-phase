import * as React from "react";
import Layout from "@layout";
import Button from "@ui/button";

// markup
const NotFoundPage = () => {
    return (
        <Layout pageTitle="404: Error Not Found">
            <div className="error-area">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-10">
                            <h1 className="title">404!</h1>
                            <h3 className="sub-title">Page not found</h3>
                            <p>
                                The page you were looking for could not be
                                found.
                            </p>
                            <Button path="/">Back To Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
