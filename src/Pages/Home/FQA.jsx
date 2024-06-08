

const FQA = () => {
    return (
        <div className="my-4 max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-teal-500 my-5 divider">FREQUENTLY ASKED QUESTIONS</h1>

            <div className="px-14 space-y-3">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    Is there a hot water dispenser in the library?
                    </div>
                    <div className="collapse-content">
                        <p>The library doesn,t have a hot water dispenser; however, the SIS Davenport Coffee Lounge The Dav does.  The hot water dispenser is located by the exterior exit door.  There is no charge for using the dispenser.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    I am an online student. How do I get a scan of a book chapter?
                    </div>
                    <div className="collapse-content">
                        <p>Any AU student, faculty, or staff member can request a scan of a chapter from a book, whether or not AU or a WRLC library owns the book.
<br />
To start, look up the book in AU Library Search on the Library,s home page.
<br />
If AU owns the book, click on the book,s title and choose Chapter/Article Request. 
<br />

If AU does not own the book, but another consortium member library does, click on the books title, log in with your AU credentials, and click on CLS Request (2-3 Day Delivery) under How to Get It, When filling out the request form, fill in the Volume/Chapter/Pages field and click the radio button next to Chapter/Article.
<br />
For materials not owned by AU or a consortium library, click on the book,s title, log in with your AU credentials, and click on Request this Book via Interlibrary Loan.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    University Archives & Special Collections ASPC!
                    </div>
                    <div className="collapse-content">
                        <p>The Archives consist of records created directly by the University, and our Special Collections are made up of materials donated to or purchased by the Libraries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FQA;