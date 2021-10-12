#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Tue Oct 12 19:34:32 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'FatFaceOnline'  # from the Builder filename that created this script
expInfo = {'MacID': '', 'Gender': '', 'Age': '', 'Ethnicity (e.g., African, Asian, & Caucasian)': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['MacID'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/kelsielau/Ratings/FatFaceRating_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='white', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "RatingInstr"
RatingInstrClock = core.Clock()
RInstr = visual.TextStim(win=win, name='RInstr',
    text='Welcome!\n\nIn this study, we need you to rate the “Attractiveness” of the faces that you just saw.\n\nPlease press the “Spacebar” to start.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
RKey = keyboard.Keyboard()

# Initialize components for Routine "RatingTrial"
RatingTrialClock = core.Clock()
image_5 = visual.ImageStim(
    win=win,
    name='image_5', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-1.0)
slider = visual.Slider(win=win, name='slider',
    startValue=None, size=(1.0, 0.025), pos=(0, -0.28), units=None,
    labels=None, ticks=(0,10,20,30,40,50,60,70,80,90,100), granularity=0,
    style=['rating'], styleTweaks=('triangleMarker',), opacity=1,
    color='Black', fillColor='Red', borderColor='Black', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, depth=-2, readOnly=False)
NextBu = visual.ImageStim(
    win=win,
    name='NextBu', 
    image='Picture1.png', mask=None,
    ori=0, pos=[0,0], size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-3.0)
mouse_5 = event.Mouse(win=win)
x, y = [None, None]
mouse_5.mouseClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='Not Attractive at all',
    font='Arial',
    pos=(-0.5, -0.32), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
text_5 = visual.TextStim(win=win, name='text_5',
    text='Very Attractive',
    font='Arial',
    pos=(0.5, -0.32), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "ITI"
ITIClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "End"
EndClock = core.Clock()
EndText = visual.TextStim(win=win, name='EndText',
    text='The experiment is over!\n\nThank you for your participation!',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "RatingInstr"-------
continueRoutine = True
# update component parameters for each repeat
RKey.keys = []
RKey.rt = []
_RKey_allKeys = []
# keep track of which components have finished
RatingInstrComponents = [RInstr, RKey]
for thisComponent in RatingInstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
RatingInstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "RatingInstr"-------
while continueRoutine:
    # get current time
    t = RatingInstrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=RatingInstrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *RInstr* updates
    if RInstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        RInstr.frameNStart = frameN  # exact frame index
        RInstr.tStart = t  # local t and not account for scr refresh
        RInstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(RInstr, 'tStartRefresh')  # time at next scr refresh
        RInstr.setAutoDraw(True)
    
    # *RKey* updates
    waitOnFlip = False
    if RKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        RKey.frameNStart = frameN  # exact frame index
        RKey.tStart = t  # local t and not account for scr refresh
        RKey.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(RKey, 'tStartRefresh')  # time at next scr refresh
        RKey.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(RKey.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(RKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if RKey.status == STARTED and not waitOnFlip:
        theseKeys = RKey.getKeys(keyList=['space'], waitRelease=False)
        _RKey_allKeys.extend(theseKeys)
        if len(_RKey_allKeys):
            RKey.keys = _RKey_allKeys[-1].name  # just the last key pressed
            RKey.rt = _RKey_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in RatingInstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "RatingInstr"-------
for thisComponent in RatingInstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('RInstr.started', RInstr.tStartRefresh)
thisExp.addData('RInstr.stopped', RInstr.tStopRefresh)
# check responses
if RKey.keys in ['', [], None]:  # No response was made
    RKey.keys = None
thisExp.addData('RKey.keys',RKey.keys)
if RKey.keys != None:  # we had a response
    thisExp.addData('RKey.rt', RKey.rt)
thisExp.addData('RKey.started', RKey.tStartRefresh)
thisExp.addData('RKey.stopped', RKey.tStopRefresh)
thisExp.nextEntry()
# the Routine "RatingInstr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
RatingBlockOrder = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Rating_BlockOrder.xlsx'),
    seed=None, name='RatingBlockOrder')
thisExp.addLoop(RatingBlockOrder)  # add the loop to the experiment
thisRatingBlockOrder = RatingBlockOrder.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRatingBlockOrder.rgb)
if thisRatingBlockOrder != None:
    for paramName in thisRatingBlockOrder:
        exec('{} = thisRatingBlockOrder[paramName]'.format(paramName))

for thisRatingBlockOrder in RatingBlockOrder:
    currentLoop = RatingBlockOrder
    # abbreviate parameter names if possible (e.g. rgb = thisRatingBlockOrder.rgb)
    if thisRatingBlockOrder != None:
        for paramName in thisRatingBlockOrder:
            exec('{} = thisRatingBlockOrder[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    Ratingtrials = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(RatingBlock),
        seed=None, name='Ratingtrials')
    thisExp.addLoop(Ratingtrials)  # add the loop to the experiment
    thisRatingtrial = Ratingtrials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRatingtrial.rgb)
    if thisRatingtrial != None:
        for paramName in thisRatingtrial:
            exec('{} = thisRatingtrial[paramName]'.format(paramName))
    
    for thisRatingtrial in Ratingtrials:
        currentLoop = Ratingtrials
        # abbreviate parameter names if possible (e.g. rgb = thisRatingtrial.rgb)
        if thisRatingtrial != None:
            for paramName in thisRatingtrial:
                exec('{} = thisRatingtrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "RatingTrial"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_5.setImage(Image)
        slider.reset()
        # setup some python lists for storing info about the mouse_5
        mouse_5.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        RatingTrialComponents = [image_5, slider, NextBu, mouse_5, text_4, text_5]
        for thisComponent in RatingTrialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        RatingTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "RatingTrial"-------
        while continueRoutine:
            # get current time
            t = RatingTrialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=RatingTrialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            if (slider.getRating()):
                #ratingResult = PracSlider.getRating()
                positionNext = (0, -0.4)
                #startNext = True
            else:
                #ratingResult = "no rating"
                positionNext = (0, -0.9)
                #startNext = False
            
            # *image_5* updates
            if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_5.frameNStart = frameN  # exact frame index
                image_5.tStart = t  # local t and not account for scr refresh
                image_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
                image_5.setAutoDraw(True)
            
            # *slider* updates
            if slider.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                slider.frameNStart = frameN  # exact frame index
                slider.tStart = t  # local t and not account for scr refresh
                slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
                slider.setAutoDraw(True)
            
            # *NextBu* updates
            if NextBu.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                NextBu.frameNStart = frameN  # exact frame index
                NextBu.tStart = t  # local t and not account for scr refresh
                NextBu.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(NextBu, 'tStartRefresh')  # time at next scr refresh
                NextBu.setAutoDraw(True)
            if NextBu.status == STARTED:  # only update if drawing
                NextBu.setPos(positionNext, log=False)
            # *mouse_5* updates
            if mouse_5.status == NOT_STARTED and t >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                mouse_5.frameNStart = frameN  # exact frame index
                mouse_5.tStart = t  # local t and not account for scr refresh
                mouse_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_5, 'tStartRefresh')  # time at next scr refresh
                mouse_5.status = STARTED
                mouse_5.mouseClock.reset()
                prevButtonState = mouse_5.getPressed()  # if button is down already this ISN'T a new click
            if mouse_5.status == STARTED:  # only update if started and not finished!
                buttons = mouse_5.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter(NextBu,)
                            clickableList = NextBu,
                        except:
                            clickableList = [NextBu,]
                        for obj in clickableList:
                            if obj.contains(mouse_5):
                                gotValidClick = True
                                mouse_5.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *text_4* updates
            if text_4.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                text_4.frameNStart = frameN  # exact frame index
                text_4.tStart = t  # local t and not account for scr refresh
                text_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
                text_4.setAutoDraw(True)
            
            # *text_5* updates
            if text_5.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                text_5.frameNStart = frameN  # exact frame index
                text_5.tStart = t  # local t and not account for scr refresh
                text_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
                text_5.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in RatingTrialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "RatingTrial"-------
        for thisComponent in RatingTrialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        Ratingtrials.addData('image_5.started', image_5.tStartRefresh)
        Ratingtrials.addData('image_5.stopped', image_5.tStopRefresh)
        Ratingtrials.addData('slider.response', slider.getRating())
        Ratingtrials.addData('slider.rt', slider.getRT())
        Ratingtrials.addData('slider.started', slider.tStartRefresh)
        Ratingtrials.addData('slider.stopped', slider.tStopRefresh)
        Ratingtrials.addData('NextBu.started', NextBu.tStartRefresh)
        Ratingtrials.addData('NextBu.stopped', NextBu.tStopRefresh)
        # store data for Ratingtrials (TrialHandler)
        x, y = mouse_5.getPos()
        buttons = mouse_5.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            try:
                iter(NextBu,)
                clickableList = NextBu,
            except:
                clickableList = [NextBu,]
            for obj in clickableList:
                if obj.contains(mouse_5):
                    gotValidClick = True
                    mouse_5.clicked_name.append(obj.name)
        Ratingtrials.addData('mouse_5.x', x)
        Ratingtrials.addData('mouse_5.y', y)
        Ratingtrials.addData('mouse_5.leftButton', buttons[0])
        Ratingtrials.addData('mouse_5.midButton', buttons[1])
        Ratingtrials.addData('mouse_5.rightButton', buttons[2])
        if len(mouse_5.clicked_name):
            Ratingtrials.addData('mouse_5.clicked_name', mouse_5.clicked_name[0])
        Ratingtrials.addData('mouse_5.started', mouse_5.tStart)
        Ratingtrials.addData('mouse_5.stopped', mouse_5.tStop)
        Ratingtrials.addData('text_4.started', text_4.tStartRefresh)
        Ratingtrials.addData('text_4.stopped', text_4.tStopRefresh)
        Ratingtrials.addData('text_5.started', text_5.tStartRefresh)
        Ratingtrials.addData('text_5.stopped', text_5.tStopRefresh)
        # the Routine "RatingTrial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "ITI"-------
        continueRoutine = True
        # update component parameters for each repeat
        import random 
        jitter = random.uniform(0.5, 1.5)
        thisExp.addData('ITI', jitter) # record it in the data file
        
        text.setText(jitter)
        # keep track of which components have finished
        ITIComponents = [text]
        for thisComponent in ITIComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ITIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ITI"-------
        while continueRoutine:
            # get current time
            t = ITIClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ITIClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                text.setAutoDraw(True)
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + jitter-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ITIComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ITI"-------
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        Ratingtrials.addData('text.started', text.tStartRefresh)
        Ratingtrials.addData('text.stopped', text.tStopRefresh)
        # the Routine "ITI" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'Ratingtrials'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'RatingBlockOrder'


# ------Prepare to start Routine "End"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# keep track of which components have finished
EndComponents = [EndText]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "End"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = EndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *EndText* updates
    if EndText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        EndText.frameNStart = frameN  # exact frame index
        EndText.tStart = t  # local t and not account for scr refresh
        EndText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(EndText, 'tStartRefresh')  # time at next scr refresh
        EndText.setAutoDraw(True)
    if EndText.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > EndText.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            EndText.tStop = t  # not accounting for scr refresh
            EndText.frameNStop = frameN  # exact frame index
            win.timeOnFlip(EndText, 'tStopRefresh')  # time at next scr refresh
            EndText.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "End"-------
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('EndText.started', EndText.tStartRefresh)
thisExp.addData('EndText.stopped', EndText.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
