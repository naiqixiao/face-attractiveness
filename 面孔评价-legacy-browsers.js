/************* 
 * 面孔评价 Test *
 *************/


// store info about the experiment session:
let expName = '面孔评价';  // from the Builder filename that created this script
let expInfo = {'Name': '', 'Gender': '', 'Age': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#8c8c8c'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const RatingBlockOrderLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RatingBlockOrderLoopBegin(RatingBlockOrderLoopScheduler));
flowScheduler.add(RatingBlockOrderLoopScheduler);
flowScheduler.add(RatingBlockOrderLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Images/midA-F-ver3.jpg', 'path': 'Images/midA-F-ver3.jpg'},
    {'name': 'Images/yA-F-ver2.jpg', 'path': 'Images/yA-F-ver2.jpg'},
    {'name': 'Images/yA-M-ver5.jpg', 'path': 'Images/yA-M-ver5.jpg'},
    {'name': 'Images/adl-F-ver8.jpg', 'path': 'Images/adl-F-ver8.jpg'},
    {'name': 'Images/yA-M-ver7.jpg', 'path': 'Images/yA-M-ver7.jpg'},
    {'name': 'TrialCondition.xlsx', 'path': 'TrialCondition.xlsx'},
    {'name': 'Images/adl-M-ver3.jpg', 'path': 'Images/adl-M-ver3.jpg'},
    {'name': 'Images/chld-F-ver3.jpg', 'path': 'Images/chld-F-ver3.jpg'},
    {'name': 'Images/adl-M-ver2.jpg', 'path': 'Images/adl-M-ver2.jpg'},
    {'name': 'Images/yA-F-ver5.jpg', 'path': 'Images/yA-F-ver5.jpg'},
    {'name': 'Images/midA-M-ver5.jpg', 'path': 'Images/midA-M-ver5.jpg'},
    {'name': 'Picture1.png', 'path': 'Picture1.png'},
    {'name': 'Rating_BlockOrder.xlsx', 'path': 'Rating_BlockOrder.xlsx'},
    {'name': 'Images/chld-F-ver2.jpg', 'path': 'Images/chld-F-ver2.jpg'},
    {'name': 'Images/midA-F-ver2.jpg', 'path': 'Images/midA-F-ver2.jpg'},
    {'name': 'Images/chld-M-ver3.jpg', 'path': 'Images/chld-M-ver3.jpg'},
    {'name': 'Images/midA-M-ver6.jpg', 'path': 'Images/midA-M-ver6.jpg'},
    {'name': 'Images/adl-F-ver5.jpg', 'path': 'Images/adl-F-ver5.jpg'},
    {'name': 'Images/chld-M-ver2.jpg', 'path': 'Images/chld-M-ver2.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Name"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionClock;
var instrBlock;
var mouse;
var RatingTrialClock;
var face_image;
var slider;
var NextBu;
var text_4;
var text_5;
var mouse_5;
var ITIClock;
var text;
var EndClock;
var EndText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  var leftText = ''
  var rightText = ''
  var sliderDirection = ''
  instrBlock = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrBlock',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "RatingTrial"
  RatingTrialClock = new util.Clock();
  var positionNext = [0, (- 0.9)];
  var onsetTime = 0
  face_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -1.0 
  });
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.025], pos: [0, (- 0.28)], units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [0, 25, 50, 75, 100],
    granularity: 0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('Black'), markerColor: new util.Color('Red'), lineColor: new util.Color('Black'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  NextBu = new visual.ImageStim({
    win : psychoJS.window,
    name : 'NextBu', units : undefined, 
    image : 'Picture1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -3.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.32)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.32)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  EndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndText',
    text: '实验结束！\n\n谢谢你的参与！',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var RatingBlockOrder;
var currentLoop;
function RatingBlockOrderLoopBegin(RatingBlockOrderLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    RatingBlockOrder = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Rating_BlockOrder.xlsx',
      seed: undefined, name: 'RatingBlockOrder'
    });
    psychoJS.experiment.addLoop(RatingBlockOrder); // add the loop to the experiment
    currentLoop = RatingBlockOrder;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    RatingBlockOrder.forEach(function() {
      const snapshot = RatingBlockOrder.getSnapshot();
    
      RatingBlockOrderLoopScheduler.add(importConditions(snapshot));
      RatingBlockOrderLoopScheduler.add(instructionRoutineBegin(snapshot));
      RatingBlockOrderLoopScheduler.add(instructionRoutineEachFrame());
      RatingBlockOrderLoopScheduler.add(instructionRoutineEnd());
      const RatingtrialsLoopScheduler = new Scheduler(psychoJS);
      RatingBlockOrderLoopScheduler.add(RatingtrialsLoopBegin(RatingtrialsLoopScheduler, snapshot));
      RatingBlockOrderLoopScheduler.add(RatingtrialsLoopScheduler);
      RatingBlockOrderLoopScheduler.add(RatingtrialsLoopEnd);
      RatingBlockOrderLoopScheduler.add(endLoopIteration(RatingBlockOrderLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var Ratingtrials;
function RatingtrialsLoopBegin(RatingtrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Ratingtrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'TrialCondition.xlsx',
      seed: undefined, name: 'Ratingtrials'
    });
    psychoJS.experiment.addLoop(Ratingtrials); // add the loop to the experiment
    currentLoop = Ratingtrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Ratingtrials.forEach(function() {
      const snapshot = Ratingtrials.getSnapshot();
    
      RatingtrialsLoopScheduler.add(importConditions(snapshot));
      RatingtrialsLoopScheduler.add(RatingTrialRoutineBegin(snapshot));
      RatingtrialsLoopScheduler.add(RatingTrialRoutineEachFrame());
      RatingtrialsLoopScheduler.add(RatingTrialRoutineEnd());
      RatingtrialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      RatingtrialsLoopScheduler.add(ITIRoutineEachFrame());
      RatingtrialsLoopScheduler.add(ITIRoutineEnd());
      RatingtrialsLoopScheduler.add(endLoopIteration(RatingtrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function RatingtrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Ratingtrials);

  return Scheduler.Event.NEXT;
}


async function RatingBlockOrderLoopEnd() {
  psychoJS.experiment.removeLoop(RatingBlockOrder);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var leftText;
var rightText;
var sliderDirection;
var blockInstruction;
var gotValidClick;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (Math.random() < 0.5) {
        leftText = LeftLabel;
        rightText = RightLabel;
        sliderDirection = "normal";
    } else {
        leftText = RightLabel;
        rightText = LeftLabel;
        sliderDirection = "mirrored";
    }
    
    var blockInstruction = (("欢迎参加实验！\n\n你会看到一些面孔图片。你需要对面孔的" + Task) + "进行评价。\n\n");
    blockInstruction = (blockInstruction + "你需要在标尺上点击相应的位置进行评价。\n\n");
    blockInstruction = (blockInstruction + "点击鼠标开始。");
    
    instrBlock.setText(blockInstruction);
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instrBlock);
    instructionComponents.push(mouse);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrBlock* updates
    if (t >= 0.0 && instrBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrBlock.tStart = t;  // (not accounting for frame time here)
      instrBlock.frameNStart = frameN;  // exact frame index
      
      instrBlock.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.5 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var positionNext;
var onsetTime;
var RatingTrialComponents;
function RatingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'RatingTrial'-------
    t = 0;
    RatingTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    positionNext = [0, (- 0.9)];
    
    onsetTime = globalClock.getTime()
    
    psychoJS.experiment.addData('onsetTime', onsetTime);
    
    psychoJS.experiment.addData('leftText', leftText);
    psychoJS.experiment.addData('rightText', rightText);
    
    psychoJS.experiment.addData('sliderDirection', sliderDirection);
    face_image.setImage(Image);
    slider.reset()
    text_4.setText(leftText);
    text_5.setText(rightText);
    // setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    RatingTrialComponents = [];
    RatingTrialComponents.push(face_image);
    RatingTrialComponents.push(slider);
    RatingTrialComponents.push(NextBu);
    RatingTrialComponents.push(text_4);
    RatingTrialComponents.push(text_5);
    RatingTrialComponents.push(mouse_5);
    
    RatingTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function RatingTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'RatingTrial'-------
    // get current time
    t = RatingTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (slider.getRating()) {
        positionNext = [0, (- 0.4)];
    } else {
        positionNext = [0, (- 0.9)];
    }
    
    // *face_image* updates
    if (t >= 0 && face_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_image.tStart = t;  // (not accounting for frame time here)
      face_image.frameNStart = frameN;  // exact frame index
      
      face_image.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.3 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *NextBu* updates
    if (t >= 0.3 && NextBu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NextBu.tStart = t;  // (not accounting for frame time here)
      NextBu.frameNStart = frameN;  // exact frame index
      
      NextBu.setAutoDraw(true);
    }

    
    if (NextBu.status === PsychoJS.Status.STARTED){ // only update if being drawn
      NextBu.setPos(positionNext, false);
    }
    
    // *text_4* updates
    if (t >= 0.3 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *text_5* updates
    if (t >= 0.3 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 0.3 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [NextBu,]) {
            if (obj.contains(mouse_5)) {
              gotValidClick = true;
              mouse_5.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RatingTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RatingTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'RatingTrial'-------
    RatingTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_5.getPos();
    _mouseButtons = mouse_5.getPressed();
    psychoJS.experiment.addData('mouse_5.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_5.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_5.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_5.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_5.rightButton', _mouseButtons[2]);
    if (mouse_5.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_5.clicked_name', mouse_5.clicked_name[0]);}
    // the Routine "RatingTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var jitter;
var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    jitter = Math.random() * (1.5-0.5) + 0.5;
    ﻿psychoJS.experiment.addData('ITI',jitter)
    text.setText('');
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(text);
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ITIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI'-------
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI'-------
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(EndText);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EndText* updates
    if (t >= 0.0 && EndText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EndText.tStart = t;  // (not accounting for frame time here)
      EndText.frameNStart = frameN;  // exact frame index
      
      EndText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (EndText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EndText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd() {
  return async function () {
    //------Ending Routine 'End'-------
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
