import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99",
            "features": [
                "Access to cardio equipment",
                "Strength training area",
                "Locker room access",
                "Group fitness classes (limited)",


            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99",
            "features": [
                "Access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal trainer consultation (1 session/month)",
                "Sauna and steam room access",

                "Guest passes (2 per month)"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$79.99",
            "features": [
                "Access for you and your family members",
                "Access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal trainer consultation (2 sessions/month)",
                "Childcare services",
                "Access to swimming pool",
                "Discounted merchandise"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    priceOptions.map((option, idx) => <PriceOption key={idx} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;