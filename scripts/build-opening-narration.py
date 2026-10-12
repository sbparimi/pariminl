"""Generate the existing opening story as a locally hosted voiceover."""
from pathlib import Path
import os

if Path('/opt/homebrew/lib/libespeak-ng.dylib').exists():
    os.environ.setdefault('PHONEMIZER_ESPEAK_LIBRARY', '/opt/homebrew/lib/libespeak-ng.dylib')

from kokoro import KPipeline
import numpy as np
import soundfile as sf

story = """Every journey has a beginning. Mine started in a small village in India,
with a big ambition to build a future through learning.
I completed my Electrical and Electronics Engineering degree. It taught me to
think in systems, trace a problem to its source, and look for evidence, not assumptions.
My first turn into software was software testing. What began as a way to understand
whether technology worked became a craft: finding what could fail before it mattered to someone.
Over eighteen years, that craft grew into automation architecture, release leadership,
global team mentoring and AI quality engineering, helping teams ship with stronger
evidence and confidence."""

pipeline = KPipeline(lang_code='b', repo_id='hexgrad/Kokoro-82M')
chunks = [audio.numpy() for _, _, audio in pipeline(story, voice='bm_lewis', speed=0.97)]
destination = Path(__file__).resolve().parents[1] / 'public' / 'audio' / 'opening.wav'
sf.write(destination, np.concatenate(chunks), 24000)
print(f'Generated opening story: {destination.name}')
