import pytest
from project import roll_dice, get_rulebook, get_random_character, get_random_alignment, get_random_race, get_random_backgrounds
from mutantfuture.characters import CharacterBase
from config import RULEBOOK_PATH, ALIGNMENTS


def test_roll_dice():
    invalid_roll_detected = False

    #test a thousand random rolls
    for _ in range(0,1000):
        if not roll_dice('3d4') in range(3,13):
            invalid_roll_detected = True
            break

    assert invalid_roll_detected == False


def test_get_rulebook():
    assert len(get_rulebook(RULEBOOK_PATH)) > 0
    with pytest.raises(FileNotFoundError):
        get_rulebook('invalid.json')


def test_get_random_character(): 
    assert type(get_random_character()) == CharacterBase


def test_get_random_alignment():
    invalid_alignment_detected = False

    #test a thousand random alignments
    for _ in range(0,1000):
        if not get_random_alignment() in ALIGNMENTS:
            invalid_alignment_detected = True
            break

    assert invalid_alignment_detected == False

def test_get_random_race():
    base_race_detected = False

    #test a thousand random races to not include base versions
    for _ in range(0,1000):
        if '(base)' in get_random_race(get_rulebook(RULEBOOK_PATH))['name'].lower():
            base_race_detected = True
            break

    assert base_race_detected == False

def test_get_random_backgrounds():
    test_is_good = True
    rulebook = get_rulebook(RULEBOOK_PATH)
    backgrounds_list = get_random_backgrounds(rulebook, 100)
    background_names = set()
    for background in backgrounds_list:
        if background['name'] in background_names:
            test_is_good = False
            break
    
    assert test_is_good
