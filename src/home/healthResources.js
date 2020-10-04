import React from 'react'

function HealthResources() {
    return (
        <>
            <div className="resourcesWords">
                <h3>Health Resources</h3>
                <p>Explore our vast and robust knowledge base on numerous health related topics and trends. Get to listen
                        to health podcast, read Specific blogs and videos to guide your health </p>
            </div>
            <div className="resourcesTabs">
                <div className="tab">
                    <b>Learn About Your Health</b><br />
                    <p>Learn how to maintain a healthy lifestyle, ranging from
                            nutritional facts to daily health tips with all other mediums you need to stay very healthy. </p>
                    <a href="http://m.me/nutriturehealth"><button>&#8620;</button></a>
                </div>
                <div className="tab">
                    <b>Visit Health Market</b><br />
                    <p>Shop for health supplements, gadgets, nutritious, and organic food products from our various food and
                            Nutrition Brands, and health - based Vendors </p>
                    <button>&#8620;</button>
                </div>
                <div className="tab">
                    <b>Join Health Community</b><br />
                    <p>Join the largest growing community of health conscious minds and get valuable health
                            tips, also get a chance to create awareness on health in Africa. </p>
                    <a href="https://www.facebook.com/groups/fortifiedfoodsinititiative/"><button>&#8620;</button></a>
                </div>
            </div>
        </>
    )
}

export default HealthResources
