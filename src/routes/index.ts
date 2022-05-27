import { Router } from "itty-router";

const router = Router({ base: '/' });

router.get('/', () => {
    return new Response("Hello world from default router.");
});

router.get('/test', () => {
    return new Response(
        JSON.stringify({
            msg: 'okk.'
        }),
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
})

router.all("*", () => new Response(
    JSON.stringify({ msg: 'Not found.' }), 
    { 
        status: 404,
        headers: { "Content-Type": "application/json", } 
    }
))

export default router
