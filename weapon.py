import pygame 

class Weapon(pygame.sprite.Sprite):
    def __init__(self, player, groups):
        super().__init__(groups)
        self.image = pygame.Surface((40, 40)) 

        # Base position is the player's center
        weapon_pos = player.rect.center

        self.rect = self.image.get_rect(center=weapon_pos)

        print("Weapon created at position:", self.rect.center)
