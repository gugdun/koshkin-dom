gdjs.OutroCode = {};
gdjs.OutroCode.GDPlayerObjects1= [];
gdjs.OutroCode.GDPlayerObjects2= [];
gdjs.OutroCode.GDPlatformObjects1= [];
gdjs.OutroCode.GDPlatformObjects2= [];
gdjs.OutroCode.GDPlatform2Objects1= [];
gdjs.OutroCode.GDPlatform2Objects2= [];
gdjs.OutroCode.GDTriggerObjects1= [];
gdjs.OutroCode.GDTriggerObjects2= [];
gdjs.OutroCode.GDMaksObjects1= [];
gdjs.OutroCode.GDMaksObjects2= [];
gdjs.OutroCode.GDCloud1Objects1= [];
gdjs.OutroCode.GDCloud1Objects2= [];
gdjs.OutroCode.GDCloud2Objects1= [];
gdjs.OutroCode.GDCloud2Objects2= [];
gdjs.OutroCode.GDBush1Objects1= [];
gdjs.OutroCode.GDBush1Objects2= [];
gdjs.OutroCode.GDBush2Objects1= [];
gdjs.OutroCode.GDBush2Objects2= [];
gdjs.OutroCode.GDFlower1Objects1= [];
gdjs.OutroCode.GDFlower1Objects2= [];
gdjs.OutroCode.GDFlower2Objects1= [];
gdjs.OutroCode.GDFlower2Objects2= [];
gdjs.OutroCode.GDFenceObjects1= [];
gdjs.OutroCode.GDFenceObjects2= [];
gdjs.OutroCode.GDLoveCoinObjects1= [];
gdjs.OutroCode.GDLoveCoinObjects2= [];
gdjs.OutroCode.GDLoveMeterObjects1= [];
gdjs.OutroCode.GDLoveMeterObjects2= [];
gdjs.OutroCode.GDLovePowerObjects1= [];
gdjs.OutroCode.GDLovePowerObjects2= [];
gdjs.OutroCode.GDGiftObjects1= [];
gdjs.OutroCode.GDGiftObjects2= [];
gdjs.OutroCode.GDMaksEmotesObjects1= [];
gdjs.OutroCode.GDMaksEmotesObjects2= [];
gdjs.OutroCode.GDMartaEmotesObjects1= [];
gdjs.OutroCode.GDMartaEmotesObjects2= [];
gdjs.OutroCode.GDCatObjects1= [];
gdjs.OutroCode.GDCatObjects2= [];
gdjs.OutroCode.GDWhereAreYouObjects1= [];
gdjs.OutroCode.GDWhereAreYouObjects2= [];
gdjs.OutroCode.GDInLoveWorldObjects1= [];
gdjs.OutroCode.GDInLoveWorldObjects2= [];
gdjs.OutroCode.GDWowObjects1= [];
gdjs.OutroCode.GDWowObjects2= [];
gdjs.OutroCode.GDGiftsObjects1= [];
gdjs.OutroCode.GDGiftsObjects2= [];
gdjs.OutroCode.GDWhatObjects1= [];
gdjs.OutroCode.GDWhatObjects2= [];
gdjs.OutroCode.GDCreamObjects1= [];
gdjs.OutroCode.GDCreamObjects2= [];
gdjs.OutroCode.GDTorchObjects1= [];
gdjs.OutroCode.GDTorchObjects2= [];
gdjs.OutroCode.GDCandiesObjects1= [];
gdjs.OutroCode.GDCandiesObjects2= [];

gdjs.OutroCode.conditionTrue_0 = {val:false};
gdjs.OutroCode.condition0IsTrue_0 = {val:false};
gdjs.OutroCode.condition1IsTrue_0 = {val:false};
gdjs.OutroCode.condition2IsTrue_0 = {val:false};
gdjs.OutroCode.conditionTrue_1 = {val:false};
gdjs.OutroCode.condition0IsTrue_1 = {val:false};
gdjs.OutroCode.condition1IsTrue_1 = {val:false};
gdjs.OutroCode.condition2IsTrue_1 = {val:false};


gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDMaksObjects1Objects = Hashtable.newFrom({"Maks": gdjs.OutroCode.GDMaksObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.OutroCode.GDTriggerObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDMaksObjects1Objects = Hashtable.newFrom({"Maks": gdjs.OutroCode.GDMaksObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.OutroCode.GDTriggerObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDGiftObjects1Objects = Hashtable.newFrom({"Gift": gdjs.OutroCode.GDGiftObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDCreamObjects1Objects = Hashtable.newFrom({"Cream": gdjs.OutroCode.GDCreamObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTorchObjects1Objects = Hashtable.newFrom({"Torch": gdjs.OutroCode.GDTorchObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDCandiesObjects1Objects = Hashtable.newFrom({"Candies": gdjs.OutroCode.GDCandiesObjects1});
gdjs.OutroCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OutroCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.OutroCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.OutroCode.GDGiftsObjects1);
gdjs.copyArray(runtimeScene.getObjects("InLoveWorld"), gdjs.OutroCode.GDInLoveWorldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.OutroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.OutroCode.GDTriggerObjects1);
gdjs.copyArray(runtimeScene.getObjects("What"), gdjs.OutroCode.GDWhatObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereAreYou"), gdjs.OutroCode.GDWhereAreYouObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wow"), gdjs.OutroCode.GDWowObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDTriggerObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDTriggerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.OutroCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDCatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWhereAreYouObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhereAreYouObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDInLoveWorldObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDInLoveWorldObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWowObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDGiftsObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDGiftsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWhatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.OutroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.OutroCode.GDTriggerObjects1);

gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDMaksObjects1Objects, gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTriggerObjects1Objects, true, runtimeScene, false);
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OutroCode.GDMaksObjects1 */
{for(var i = 0, len = gdjs.OutroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition0IsTrue_0;
gdjs.OutroCode.condition0IsTrue_1.val = false;
gdjs.OutroCode.condition1IsTrue_1.val = false;
{
gdjs.OutroCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.OutroCode.condition0IsTrue_1.val ) {
{
gdjs.OutroCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
gdjs.OutroCode.conditionTrue_1.val = true && gdjs.OutroCode.condition0IsTrue_1.val && gdjs.OutroCode.condition1IsTrue_1.val;
}
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.OutroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.OutroCode.GDTriggerObjects1);

gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition0IsTrue_0;
gdjs.OutroCode.condition0IsTrue_1.val = false;
gdjs.OutroCode.condition1IsTrue_1.val = false;
{
gdjs.OutroCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDMaksObjects1Objects, gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.OutroCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.OutroCode.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.OutroCode.GDTriggerObjects1[i].getVariableString(gdjs.OutroCode.GDTriggerObjects1[i].getVariables().get("id")) == "maks_stop" ) {
        gdjs.OutroCode.condition1IsTrue_1.val = true;
        gdjs.OutroCode.GDTriggerObjects1[k] = gdjs.OutroCode.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.OutroCode.GDTriggerObjects1.length = k;}}
gdjs.OutroCode.conditionTrue_1.val = true && gdjs.OutroCode.condition0IsTrue_1.val && gdjs.OutroCode.condition1IsTrue_1.val;
}
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition1IsTrue_0;
gdjs.OutroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8245988);
}
}}
if (gdjs.OutroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OutroCode.GDMaksObjects1 */
{for(var i = 0, len = gdjs.OutroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.OutroCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDCatObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.OutroCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereAreYou"), gdjs.OutroCode.GDWhereAreYouObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDCatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWhereAreYouObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhereAreYouObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InLoveWorld"), gdjs.OutroCode.GDInLoveWorldObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereAreYou"), gdjs.OutroCode.GDWhereAreYouObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDWhereAreYouObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhereAreYouObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDInLoveWorldObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDInLoveWorldObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].hide();
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InLoveWorld"), gdjs.OutroCode.GDInLoveWorldObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wow"), gdjs.OutroCode.GDWowObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDInLoveWorldObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDInLoveWorldObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWowObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.OutroCode.GDGiftsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wow"), gdjs.OutroCode.GDWowObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.OutroCode.GDWowObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDGiftsObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDGiftsObjects1[i].hide(false);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if (gdjs.OutroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.OutroCode.GDGiftsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.OutroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("What"), gdjs.OutroCode.GDWhatObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDGiftsObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDGiftsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDWhatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhatObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.OutroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMaksEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition1IsTrue_0;
gdjs.OutroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8098764);
}
}}
if (gdjs.OutroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.OutroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("What"), gdjs.OutroCode.GDWhatObjects1);
gdjs.OutroCode.GDGiftObjects1.length = 0;

{for(var i = 0, len = gdjs.OutroCode.GDWhatObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDWhatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OutroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDMartaEmotesObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDGiftObjects1Objects, 336, 100, "");
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition1IsTrue_0;
gdjs.OutroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8018268);
}
}}
if (gdjs.OutroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gift"), gdjs.OutroCode.GDGiftObjects1);
gdjs.OutroCode.GDCreamObjects1.length = 0;

{for(var i = 0, len = gdjs.OutroCode.GDGiftObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDGiftObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.OutroCode.GDGiftObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDGiftObjects1[i].setZOrder(-(1));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDCreamObjects1Objects, 347, 111, "");
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition1IsTrue_0;
gdjs.OutroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8250100);
}
}}
if (gdjs.OutroCode.condition1IsTrue_0.val) {
gdjs.OutroCode.GDTorchObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDTorchObjects1Objects, 333, 116, "");
}}

}


{


gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
{gdjs.OutroCode.conditionTrue_1 = gdjs.OutroCode.condition1IsTrue_0;
gdjs.OutroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8168044);
}
}}
if (gdjs.OutroCode.condition1IsTrue_0.val) {
gdjs.OutroCode.GDCandiesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDCandiesObjects1Objects, 365, 121, "");
}}

}


};

gdjs.OutroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OutroCode.GDPlayerObjects1.length = 0;
gdjs.OutroCode.GDPlayerObjects2.length = 0;
gdjs.OutroCode.GDPlatformObjects1.length = 0;
gdjs.OutroCode.GDPlatformObjects2.length = 0;
gdjs.OutroCode.GDPlatform2Objects1.length = 0;
gdjs.OutroCode.GDPlatform2Objects2.length = 0;
gdjs.OutroCode.GDTriggerObjects1.length = 0;
gdjs.OutroCode.GDTriggerObjects2.length = 0;
gdjs.OutroCode.GDMaksObjects1.length = 0;
gdjs.OutroCode.GDMaksObjects2.length = 0;
gdjs.OutroCode.GDCloud1Objects1.length = 0;
gdjs.OutroCode.GDCloud1Objects2.length = 0;
gdjs.OutroCode.GDCloud2Objects1.length = 0;
gdjs.OutroCode.GDCloud2Objects2.length = 0;
gdjs.OutroCode.GDBush1Objects1.length = 0;
gdjs.OutroCode.GDBush1Objects2.length = 0;
gdjs.OutroCode.GDBush2Objects1.length = 0;
gdjs.OutroCode.GDBush2Objects2.length = 0;
gdjs.OutroCode.GDFlower1Objects1.length = 0;
gdjs.OutroCode.GDFlower1Objects2.length = 0;
gdjs.OutroCode.GDFlower2Objects1.length = 0;
gdjs.OutroCode.GDFlower2Objects2.length = 0;
gdjs.OutroCode.GDFenceObjects1.length = 0;
gdjs.OutroCode.GDFenceObjects2.length = 0;
gdjs.OutroCode.GDLoveCoinObjects1.length = 0;
gdjs.OutroCode.GDLoveCoinObjects2.length = 0;
gdjs.OutroCode.GDLoveMeterObjects1.length = 0;
gdjs.OutroCode.GDLoveMeterObjects2.length = 0;
gdjs.OutroCode.GDLovePowerObjects1.length = 0;
gdjs.OutroCode.GDLovePowerObjects2.length = 0;
gdjs.OutroCode.GDGiftObjects1.length = 0;
gdjs.OutroCode.GDGiftObjects2.length = 0;
gdjs.OutroCode.GDMaksEmotesObjects1.length = 0;
gdjs.OutroCode.GDMaksEmotesObjects2.length = 0;
gdjs.OutroCode.GDMartaEmotesObjects1.length = 0;
gdjs.OutroCode.GDMartaEmotesObjects2.length = 0;
gdjs.OutroCode.GDCatObjects1.length = 0;
gdjs.OutroCode.GDCatObjects2.length = 0;
gdjs.OutroCode.GDWhereAreYouObjects1.length = 0;
gdjs.OutroCode.GDWhereAreYouObjects2.length = 0;
gdjs.OutroCode.GDInLoveWorldObjects1.length = 0;
gdjs.OutroCode.GDInLoveWorldObjects2.length = 0;
gdjs.OutroCode.GDWowObjects1.length = 0;
gdjs.OutroCode.GDWowObjects2.length = 0;
gdjs.OutroCode.GDGiftsObjects1.length = 0;
gdjs.OutroCode.GDGiftsObjects2.length = 0;
gdjs.OutroCode.GDWhatObjects1.length = 0;
gdjs.OutroCode.GDWhatObjects2.length = 0;
gdjs.OutroCode.GDCreamObjects1.length = 0;
gdjs.OutroCode.GDCreamObjects2.length = 0;
gdjs.OutroCode.GDTorchObjects1.length = 0;
gdjs.OutroCode.GDTorchObjects2.length = 0;
gdjs.OutroCode.GDCandiesObjects1.length = 0;
gdjs.OutroCode.GDCandiesObjects2.length = 0;

gdjs.OutroCode.eventsList0(runtimeScene);

return;

}

gdjs['OutroCode'] = gdjs.OutroCode;
