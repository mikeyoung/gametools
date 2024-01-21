import pytest
from project import roll_dice, get_rulebook, get_random_character
from mutantfuture.characters import CharacterBase
from config import RULEBOOK_PATH


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