import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99 per month",
            "features": [
                "Access to cardio equipment",
                "Strength training area",
                "Locker room access",
                "Group fitness classes (limited)",
                "24/7 gym access",
                "Towel service",
                "Discounts on supplements"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99 per month",
            "features": [
                "Access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal trainer consultation (1 session/month)",
                "Sauna and steam room access",
                "Nutritional counseling",
                "Free access to workshops",
                "Guest passes (2 per month)"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$79.99 per month",
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
        <div>
            <h2 className="text-5xl">Best Prices in the Town</h2>
            {
                priceOptions.map((option, idx) => <PriceOption key={idx} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;