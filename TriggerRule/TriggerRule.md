# Triggers and Rules
OpenWhisk triggers and rules bring event-driven capabilities to the platform. Events from external and internal event sources are channeled through a trigger, and rules allow your actions to react to these events

## Triggers
Triggers are a named channel for a class of events. In other words  a trigger is a declaration that you want to react to a certain type of event, whether from a user or by an event source. Triggers fire when they receive an event. Events are always occurring, and it's your choice on how to respond to them.
As with actions, each firing of a trigger results in an activation ID.

Triggers can be explicitly fired by a user or fired on behalf of a user by an external event source. A feed is a convenient way to configure an external event source to fire trigger events that can be consumed by OpenWhisk

To create a trigger we will type:

    wsk trigger create newUser

Wehre newUser is the name of the trigger.

To list all the triggers created

    wsk trigger list

to fire the trigger manually you can issue the command:

    wsk triggr fire newUser --param name Gianluca

The Trigger can be fired manually or from an external source, like a change in the Cloudant database or a commit in a Github repository!
## Rules
Triggers define events, Rules allows toy to bind a specific trigger to a numer of action. You can combine a number of action to run in paralell combining them to the same trigger.
To bind a trigger to an action you can type

    wsk rule create myRule newUser hello

if we want to bind the trigger to second action we can just type:

    wsk rule create myRule newUser nameAPI

To fire the trigger and see the result we will use:
```
    wsk trigger fire newUser --param name Gianluca
    wsk activation list --limit 1 hello
    wsk activation result *ID* 
```

where the *ID* is the activation id of the fired action
