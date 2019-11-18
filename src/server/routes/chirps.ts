import { Router } from 'express';
import ChirpStore from '../utils/chirpstore';

const router = Router();

// get all chirps or individual chirp by id
router.get('/:chirpid?', (req, res) => {
    const id = req.params.chirpid;
    if (id) {
        let chirp = ChirpStore.GetChirp(id);
        res.json({ id, ...chirp });
    } else {
        let data = ChirpStore.GetChirps();
        let chirps = Object.keys(data).map(key => {
            return {
                id: key,
                username: data[key].username,
                message: data[key].message,
                created_at: data[key].created_at
            };
        });
        chirps.pop();
        res.json(chirps);
    }
});

// post a new chirp
router.post('/', (req, res) => {
    req.body.created_at = Date.now();
    ChirpStore.CreateChirp(req.body);
    res.json('Chirp has been chirped!')
});

router.put('/:chirpid', (req, res) => {
    const id = req.params.chirpid;
    req.body.created_at = Date.now();
    ChirpStore.UpdateChirp(id, req.body);
    res.json('Chirp has been edited!');
});

// delete chirp by id
router.delete('/:chirpid', (req, res) => {
    const id = req.params.chirpid;
    ChirpStore.DeleteChirp(id);
    res.json('Chirp has been deleted!');
})

export default router;