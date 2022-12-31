import initStripe from 'stripe';
import { supabase } from '../../utils/supabase';

const handler = async (req, res) => {
    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send('you are not authorized to send this request.')
    }

    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

    const customer = await stripe.customers.create({
        email: req.body.record.email,
    });

    const user = await supabase.from("profile").update({
        stripe_customer: customer.id,
    }).eq("id", req.body.record.id);

    console.log(user)

    res.send({ message: `stripe customer created: ${customer.id}` });
};

export default handler;