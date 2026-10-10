from pathlib import Path
import numpy as np,soundfile as sf
sr=24000;duration=48;t=np.arange(sr*duration)/sr
sound=np.zeros((len(t),2));rng=np.random.default_rng(42)
# Original minor-key ambient score: layered pads, a restrained pulse and glass harmonics.
for start,notes in [(0,[110,130.81,164.81]),(12,[87.31,110,130.81]),(24,[98,123.47,146.83]),(36,[82.41,110,164.81])]:
    mask=(t>=start)&(t<start+12);x=t[mask]-start;env=np.sin(np.pi*x/12)**1.4
    for f in notes:
        for c in range(2):
            sound[mask,c]+=env*(.085*np.sin(2*np.pi*f*x+c*.25)+.025*np.sin(2*np.pi*f*2.003*x)+.008*np.sin(2*np.pi*f*4*x))
for start in np.arange(0,duration,1.5):
    mask=(t>=start)&(t<start+1.2);x=t[mask]-start;env=np.exp(-x*6)*(1-np.exp(-x*80))
    bass=np.sin(2*np.pi*(55*x+9*(1-np.exp(-x*8))/8))*env*.19
    sound[mask,:]+=bass[:,None]
for i,start in enumerate(np.arange(0,duration,3)):
    mask=(t>=start)&(t<start+3);x=t[mask]-start;f=[440,523.25,659.25,783.99][i%4];tone=np.sin(2*np.pi*f*x)*np.exp(-x*2)*(1-np.exp(-x*30))*.045
    sound[mask,i%2]+=tone;sound[mask,1-i%2]+=tone*.5
fade=np.minimum(np.minimum(t/2,(duration-t)/2),1);sound*=fade[:,None]
sound=np.tanh(sound);sf.write(Path(__file__).resolve().parents[1]/'public'/'audio'/'score.wav',sound,sr,subtype='PCM_16')
