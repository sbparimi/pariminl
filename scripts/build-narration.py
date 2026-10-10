from pathlib import Path
import os,json
if Path('/opt/homebrew/lib/libespeak-ng.dylib').exists():
    os.environ.setdefault('PHONEMIZER_ESPEAK_LIBRARY', '/opt/homebrew/lib/libespeak-ng.dylib')
from kokoro import KPipeline
import soundfile as sf
import numpy as np
out=Path(__file__).resolve().parents[1]/'public'/'audio';out.mkdir(exist_ok=True)
lines={'top':'Welcome to Suresh Parimi. The Quality Series. Explore eighteen years of quality engineering, automation, and AI evaluation.','about':'About Suresh. Quality engineering, grounded in experience.','journey':'The career journey. From enterprise testing to evaluating intelligent systems.','originals':'Case studies. Real engagements, engineering decisions, and measurable outcomes.','picks':'Career highlights. A closer look at the work that matters.','skills':'The engineering toolkit. Automation, AI evaluation, and enterprise delivery.','moments':'Career impact. Results, leadership, and professional qualifications.','story':'The full story. Explore the résumé, or download a copy.','contact':'Let’s connect. Start a conversation about quality engineering and AI.'}
pipe=KPipeline(lang_code='b',repo_id='hexgrad/Kokoro-82M')
for key,text in lines.items():
    chunks=[a.numpy() for _,_,a in pipe(text,voice='bm_lewis',speed=0.97)]
    sf.write(out/f'{key}.wav',np.concatenate(chunks),24000)
    print(key,flush=True)
