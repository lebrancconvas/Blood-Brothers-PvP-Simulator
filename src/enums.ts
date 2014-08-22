module ENUM {

    /**
     * Is the skill opening, attack, defense, etc.
     */
    export enum SkillType {
        OPENING = 1,
        ACTIVE = 2, // attack, active healing, revive, dispell, suicide, random
        DEFENSE = 3, // drain, counter, survive
        FIELD = 4,
        PROTECT = 5, // protect, protect-counter, evade, protect-reflect, counter-dispell

        ACTION_ON_DEATH = 16,
    }
    
    /**
     * Is the skill buff, attack, magic, etc.
     */
    export enum SkillFunc {
        BUFF = 1, // arg1: multiplier, arg2, 3: status
        DEBUFF = 2,
        ATTACK = 3, // arg1: multi, arg2: affliction, arg3: affliction prob.,
                    // arg4: number of turns for silent & blind, % for venom, arg5: miss prob.for blind
        MAGIC = 4, // anything that ignores position, args: same as ATTACK
        COOP = 5,
        REVIVE = 6, // arg1: hp heal ratio on revive
        KILL = 7, // arg1: multi, arg2: kill chance
        STEAL = 8,
        CHARGE = 9,
        DRAIN = 11, //arg1: always 1?
        PROTECT = 12,
        COUNTER = 13, // arg1: multi
        PROTECT_COUNTER = 14,
        TREASURE_HUNTER = 15,
        DISPELL = 16, //arg1-5: 0
        SUICIDE = 17,
        HEAL = 18, //arg1: multi, arg2: 0 if heal based on caster's wis, 1 if heal based on target's max HP
        AFFLICTION = 19, //arg1: always 0? arg2: afflict type, arg3: afflict prob., arg4: turns for silent & blind, % for venom, arg5: miss prob. for blind
        SURVIVE = 20, //arg1: HP threshold percent
        DEBUFFATTACK = 21, // arg1: multiplier, arg2: status, arg3: debuff prob., arg4: debuff multi (use WIS)
        DEBUFFINDIRECT = 22, // same as 21

        RANDOM = 24,
        COPY = 25,
        IMITATE = 26,
        EVADE = 27,
        PROTECT_REFLECT = 28,
        COUNTER_DISPELL = 29, // arg1, arg2: 0?, arg3: dispell range, arg4: ?? (aka protect-dispell)
        TURN_ORDER_CHANGE = 31, // arg1: new base, arg2: turn num
        CASTER_BASED_DEBUFF = 32, //arg1: multi, arg2, 3: status
        CASTER_BASED_DEBUFF_ATTACK = 33,  // arg1: multi, arg2: status, arg3: debuff prob, arg4: debuff multi
        CASTER_BASED_DEBUFF_MAGIC  = 34,  // same as 33

        DRAIN_ATTACK = 36, //arg1: multi, arg2: heal % of damage dealt, arg3: effect (unimportant), arg4: heal range
        DRAIN_MAGIC = 37, // same as 36
        CLEAR_DEBUFF = 40
    }
    
    /**
     * Is the skill calculated based on atk, wis, agi, etc.
     */
    export enum SkillCalcType {
        DEFAULT = 0, // default is Wis, usually used for buff
        ATK = 1,
        WIS = 2, // usually used for active skill
        AGI = 3, 
        HEAL = 4,
        BUFF = 5,
        DEBUFF = 6,
        REFLECT = 7
    }
    
    export enum StatType {
        HP, ATK, DEF, WIS, AGI
    }
    
    export enum StatusType { // skillFuncArg2 for buffs
        ATK = 1,
        DEF = 2,
        WIS = 3,
        AGI = 4,

        ATTACK_RESISTANCE = 5,
        MAGIC_RESISTANCE = 6,
        BREATH_RESISTANCE = 7,

        SKILL_PROBABILITY = 8,
        ALL_STATUS = 9,

        ACTION_ON_DEATH = 16,

        HP_SHIELD = 17,
        WILL_ATTACK_AGAIN = 18
    }

    export enum WardType {
        PHYSICAL = 1,
        MAGICAL = 2,
        BREATH = 3
    }

    export enum AfflictionType {
        POISON = 1,
        PARALYSIS = 2,
        FROZEN = 3,
        DISABLE = 4,
        SILENT = 5,
        BLIND = 7
    }

    export enum BattleTurnOrderType {
        AGI = 0,
        ATK = 1,
        WIS = 2,
        DEF = 3,
        HP = 4,
    }
    
    export enum FormationRow {
        REAR = 3,
        MID = 2,
        FRONT = 1
    }

    export enum FormationType {
        SKEIN_5  = 0,
        VALLEY_5 = 1,
        TOOTH_5  = 2,
        WAVE_5   = 3,
        FRONT_5  = 4,
        MID_5    = 5,
        REAR_5   = 6,
        PIKE_5   = 7,
        SHIELD_5 = 8,
        PINCER_5 = 9
    }

    export enum ProcOrderType {
        ANDROID = 1, 
        IOS     = 2
    }

    export enum BattleType {
        BLOOD_CLASH = 1, 
        NORMAL = 2
    }

    export enum RandomBrigType {
        NONE = 0,
        ALL = 1, 
        X_ONLY = 2,
        SP_ONLY = 3,
        SP_UP = 4,
        S_ONLY = 5,
        S_UP = 6,
        AP_ONLY = 7,
        AP_UP = 8,
        A_ONLY = 9,
        A_UP = 10
    }

    export enum RandomBrigText {
        "all" = 1,
        "Tier X" = 2,
        "Tier S+" = 3,
        "Tier S+ and up" = 4,
        "Tier S" = 5,
        "Tier S and up" = 6,
        "Tier A+" = 7,
        "Tier A+ and up" = 8,
        "Tier A" = 9,
        "Tier A and up" = 10
    }

    export enum MinorEventType {
        HP = 1,
        STATUS = 2,
        AFFLICTION = 3,
        PROTECT = 4,
        DESCRIPTION = 5,
        BATTLE_DESCRIPTION = 51, // used for displaying things that affect the whole battle
        TEXT = 6, // used for displaying text in the debugger that has nothing to do with the battle
        REVIVE = 7,
        RESERVE_SWITCH = 8,
        BC_ADDPROB = 9, // added probability at end of turn in bloodclash
    }
}


