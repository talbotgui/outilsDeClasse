import { Annee } from './model';

export class Jdd {
    static ajouterDesErreurAuJdd(annee: Annee) {
        // problème E1
        annee.eleves[1].commentairesDePeriode[0].idPeriode = 'mauvaisIdPeriode';
        // problème E2
        annee.eleves[1].parcoursDePeriode[0].idPeriode = 'mauvaisIdPeriode';

        // problème J1
        annee.journal[1].temps[0].groupes[0].eleves.push('mauvaisIdEleve');
        // problème J2
        annee.journal[1].temps[0].groupes[0].competences.push('mauvaisIdCompetence');

        // problème N1
        annee.eleves[1].notes[1].idPeriode = 'mauvaisIdPeriode';
        // problème N2 + PRO5
        annee.eleves[1].notes[1].idItem = 'mauvaisIdCompetence';
        // problème N3
        annee.eleves[1].notes[1].valeurEvaluation = 'mauvaiseValeurEvaluation';
        // problème N4
        annee.eleves[1].notes[0].idsProjets?.push('mauvaisIdProjet');

        // problème P1
        annee.periodes.push({ id: 'periodeMauvaise1', debut: new Date('2025-02-27T00:00:00.000Z'), fin: undefined, nom: 'Période mal renseignée' });
        // problème P2
        annee.periodes.push({ id: 'periodeMauvaise2', debut: new Date('2025-02-28T00:00:00.000Z'), fin: new Date('2025-04-09T00:00:00.000Z'), nom: 'Période mal renseignée' });

        // problème PRO1 et PRO2
        annee.projets[0].sousProjetParPeriode?.push({ id: 'bouchon-p1p2', idPeriode: 'mauvaisIdPeriode', idCompetences: ['mauvaisIdCompetence'], commentaire: 'comme cela' });
        // problème PRO3
        annee.projets[0].idsEleve?.push('mauvaisIdEleve');
        // problème PRO4
        annee.eleves[1].notes[1].idsProjets = [];
    }

    // Jeu de données riche
    static JDD_RICHE: Annee = {
        versionMajeureApplication: 2024,
        motDePasse: 'démonstration',
        id: 'bouchon-0',
        enteteEdition: '<img class="maclasse-afficherAgauche" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABeCAYAAADokdD5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABJ0AAASdAHeZh94AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH6AYPETQStJedQQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wNi0xNVQxNzo1MjoxNyswMDowMKzNTfUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDYtMTVUMTc6NTI6MTcrMDA6MDDdkPVJAAApSUlEQVR4Xu19CXxU1b3/We6drJOEaIBkthBAFGur8ihtceni1let+iq2iktb7apWRKttrfYpLhW3RxWr1drFulSqVZ+t/qtWUVmk7CAYliwzmYSAhCWQZObee87/+ztzJ0yAQPBpKXS+fC537tnP+S3n9zv3nBvO2DTN9hnFuLY/zpj6IWOT2zJhGTSwslOLGX/GY6zE9cP6g4ULaXpcJkYNZ5vimdA8PkwI/74PKMLV9Qpjky7YmbgEzlQziNYm/ec89i/2kcAkc+mNjOlLM8+7Yhjb9p7HvOeKQOo89j/2kcAklw6kdlK/6nSC1tIpKl0DFZ3HvwAGQGBKYvsX/eYxxu46FD92i7Fv/e1T8ZNPCHWz9L5yTx4fAfZCAyKq6obULmAstQIXJLcgCFV9SiZ+VxRu2ty6vbL4MZfxNwvzanq/Yw9WNKlj3cKY9zSSdeBaCYN3CQhchjjkuXxxJt3u0cQqfoOEX+9k/RvpeSv6o0c/EkySp3sw/Mvx+1RI8bO41oMkExDxNfzeo2vVxA6t1kx9tWcPxM3jn4N+CEyE8SDCARBXk2RFQejPQ3ovwfMJjHU3QPILGPsZCWEvVrHKskZWXsGZc6TNeFHe0Nr/2MMcLDABKxLlavx+Av7vTSB6M9Tz7ZhprwKh4QcbLWvQxMqHFTF3EQJWgD1+R2HKxOSxPwECB3Dr7zIqdhOuNGNdMLL4saDpb3GPgNDPMXYT1HgGnKnjw0zWHcp49SGM15CBVbKXqxSXxXhhmqm9GHt5fFCQkfWe/3s30CSEkGQOSgsQWSzDvDyNsSvnZuJ3IM7KKpHuvzjTmKN5OdTzXidg38hKaRaYMIxtWJcJzePDBAj8EC0s94OtpKJ9FOH35dv8hz3iZ+AE6PO9EtjHQNPlkUceBxNytEse/eGAHaRYLFboKvdmgfk+2JO6esWGDQOaPv7dcMC+1duyZYsbrAhuF4LfmpZWeOvWrS/6UXnkgIdCoZGWZcl0Oh1va2vr8sPZiBEjClzXrUW4bm1tbUCQC6mpEMIZzHlhe0NDw5YxY8bY69atq7VtWyBtvKWlpTuTm7FoNFrNOaxpz2um8Orq6mJRJEJel7cZeTb4ySjdeKXUYVLqxubm5NsIMvWgvCrk72OAaa25lNKLx+NNVVVVxVbQqpRpOQxsWsM8thzpuxKJxFpKG4sNqeVcFlAeuHw9zQAVQXGEurq68lQqNdh/NEA/0k1NTbSwc9AYfgISsEAztUxa0ixOZNGd6r5fM2+5lOIfIEIVhWntXaiZvTztpSfS8/vvt4SE5HOQfzlif0NhWWit7qByhVDH0DMG7zOWku8GAtZPTAIgEgndxQV727Llo1xYr0eikfk1NTXHoJ5zAgX2KmmJ1YhfDS9tBepZbQesVWjTe5UjKksLCgpOsly5FvGvgg2eQNqlqO8fKJa0klTKfl5p+a5m1kqEN0ajkTlgnE+bioG0mz4Hed4VFqd6VlkBucr13DfD4XChn+SggNBMU4csEPKcSCRyBgXifrwU4lIIuEXxGSkgomkLHGHT3X8WuArw0wKDfDUaDX2FwgkID4B5LEpDz5BSFGny0goKg+YYJy3rak9573pu+izPde/nnB3FLT7C8/Q85Xn3e666F+lXQmptpdXzCLtXM35PJatMQVoLEE7tex2VTfaUuhat/BFVNRoERngQeZXS+lr8/7iQYpzS3u8g+aVUP0cfqFykeQXxP/E8daPm+tbhw4c7FH+wgAYfY686aTAwKD8HB1eC42+nSIST4ZK74ojxwhAz7odxojxHui24XBp8Uq8mhjMPSelu1B2pW8oLZJaoJQsjjKy8VYlE2/OJRPKKlE6PSMaTM5LJ5NLm5sQVUO2TkfMVSscUvzUeb5ncEm/50Zo1a1KKKztjInLKey/C70TeXyFAb4/FqF8Uu4XCEX+B53obUM7I4mIrbHL57ZKcP4X425FuCuWfOXPm3raSHVAQJAno7lJIwF2Q4tGQ6b+Bs8eDyNNBkHcQv2eVxXkxGOMdSMFUy7aiZNn6MXucx4QWczDPtkAIz4b6nAmtcWZ7vL3Rj94BzkhDMOiKoHn2AdbIMIxm54Sj4RsjscgU0gp+NBGQCFUMhj0P8T/nUlQhfcvWrT1mHxmttFF+cOHXEP9T5L8ZzHk0xR1MyKwBc1ZYWlx6C6SwPmAHxoBYrdrjN4K4A7GySb4KoVZvdR13NfTeFRjUjyF8cyZ694Ax1KoV+yLU7itQnydgHnwuHA09l9UAAwHpHFT+WcHZTdD/PxVCj/ejiLtIjRej3CfQpuvQp/Wob+KmTZu2+EmIwuBwcTK4fAry3+Bqd6wfddDAX+TXhfX19Z3o7Q+U8uZAW18F9diB8D0sY/ZBIVngiusrMagMhs990N19LNTdAXUsh9o9xfHcLyhPvQND7ExPOz/0o/cKzOlEyHu04iGmeW1xcephP4oA20F1uNr7Ciz5BDGrF/Ca/DiyxLjJr9SdlnRjruON7CnqecqPPmhgCAwJJHUqE02JvzU1xj8D4XqawgeOjDuTbE6+5Hnuk1Dxn0WJZ0IjmNh+ICHpZ5H7hLnv7/COrjYSydjA1SQSg3BJ0gZwb5rr6zd2+jHUIxh4LIU2PauY/h6IeQis7qdHjx5tjLwd0I0NDW3k4q3ZmJv/IAHNwURd2uy8G/BCE+9b0fhtm2fO/ffA+IVnoHeeVh67FkTugG8dyOTNMBGIDXsG0o0y6Bku0kS4PX+WtpyHOfA2xcTPTXouQOwdQA5TDqzoPtMFni1qOCTw8kg09OdILPy/KOe3iBJwecmQoz6VEkHBQH9xPe/3gYA9rrNzy92UH33ypyc+GfmfjcbCLyD/A7sywIENAalZhYFa6T/3AYiziuIDgYBxHaDyNsDvaMSovk/PnmenEV8PI2sVPRNgAbdAZV4DVb+W8oI22ykcEtSJ50YIdZKeoTFfcT3nfrBHLea/H4OQ4xzH/VWhXXg/xWcBQqI8r5Hy+0EGoHYH/Na1ID6YjR+H/J9BWeRzE8d5qHcRwhak02nDgcpVk/H7TbDqF+HXD/O41YL5n4w6YoQT0dfjMQ5Hb9++3Z+2Dg5Q50kySMXuTp9SZ82Amacd6enZqGUgOyA75ycpz5ZL92xeeu5NS24ZiEeGVXc8Ht/lpARA5dOVWycht+1ZZOsjUDwhN55lJXTFihVp3LJtJFD6Pm07GJAdhP2KUCR0HSTxcHjV19N86gfncTAgHAt/IxqLdNHdD8rjQwT3fdYsSKK7yaLMPO4A0o1QUpUKTxh1LaWyUrZqWbdmx4sDAr2AaG9vHwUjJoX5eLUfTODR6NAjOC/QMIJW1tTURGA+VUJBDseVggJeBVW9nSR4yJAhJTDShkOqc9VtB9pl5u8sKB0s9pHItyE3Dr50reu6ZeXl5e/5qtigrm5QuesGj4PBF+MWT7opdxbcO2NP5IL6iv4Fe2Rhsr2hYT2Fwdo/NBDgEdflmN93vATRlhaWttLo03uY2yvQ7+Gou2nncmtrQ5/wmDiajDuu+DL0c74fZUBTFcY3ajOVam5el2sTSZQ7Cm1O744uewP8fLYE1zJpCbqW0qJ+NBqZiwpP9dMYIM0fbC4XUZpMusBCOyWv8KN7AeIOhte0UAg+ww8yiMVqPsGFvVRp96f0LCxxl8XkYsnEM5KLF+nlAi2VUlxhofVJ1LEEbeltF+pvjEbDfxwcjdZRGgKlQ75FXOjs6pmBp7yHKf/mzZuH+UEsGg1NcNySJQh/0QrI6TDsnrNsawX6+f1cy5mIi7oWMG4tDLipXnfRssS3qc+WLald1B6MA19qc2sx+rSAncik1u6XEf8PMN3FfjY2dOjQqkg08qTSYrElxG9tKR/F2PwjHA29EAqFzLIpATwzAWUt0sxeirZe6AcTYw2ilyio7xk8ks2xTyA3iV4YtMOivAXXzXA7noC80AC/HIlUn+mnI9BLBwyeutFz1WW4foChfMGP2xloiO7TGE+LM1CVFJw9kgkxLzngVul7lNaXu8qbpLkmNwfWusT4wzVSahHq+xmu21H1TGnJcwuYem1o7dBYJh1cHcg2xGnnjptnxBsboyZaczqqfhp9jTlu+l64TBM9x50CS/sQ9P6ujq6OakpnINj5aGWZ56kU2ntiNFo9hoKhTGaiHT/HGE2BN7ASZWEs9O8RdgsacDObyRTCsoxi6oUmKQQzPWtZ8mvoy2ZI9pO4noBnsNG27DO44P9LWoXSoq2mzSjD0oxPHTFiqP8GD6OidQCXcS/3FcYCRqFNiUTyBlw/wzVRK/ZJFLgVPukD2bcvlAwuUooW5aEqHoDFe18isa6PmskB1DjPWt5GbcPD/Y7retBkyTcoDCNg1C+4/U6UOT3RlJiWWfAwAM2IcvoNxN2M6yctiZaTXcf5Hohca3nWFEqEdis/ZV/Ll2vzwgBqntw7IbS4i57BTP/VEm+d3NLc8gT6SYwK10oet65pHb0rNu1EnRcjfAO0yXXEZGihkSYY+LPiTfEfUz6MDa3RU613JpoTNG6keehFjL8+QK1CgHIvBiGP81xvORz8sYl48nxcEwV3/gOEXmTb1tHpdMm3KC2KM30AIyQwJkNTKXkHPWP6oXCX+Ime9xWGwOgMcQ/1xoDmB0jyLzBANYGiwCcpDGkciLsdiYSm47oD10/MgAwADZsailH6n6XQ38djZv7SmfkV6vTOSCxyJy120Dxk4nxgEM2LhiwwPT+IgZmPztJrSQuD0d+rvUwdsCcwfx0OfTDK89y/gzH/7IcbwEZ4B4y60H9k69ev/yz6XIe+Pp9MJKd5npdEQecdMmpU3xcd3GwaZ5gz+4QDpl7wXbb+s0B0Bm3wo9z5s7m5vYkzcS3FQYOcngmFD4GCkfEXYIjZIPI30Pbxra2ttC+9lzb7iqwPuwtgCpiJHpQ/hO6owYNKgUrk3+cCjePsMlQ+IAJvati0JdGcvALS+1c/iOAPBrsAZV+Nrk0Ctxp1tSfAvFkNySrG3EQrXFnJzQ6oAfe1B3G/o51KGjj82/VN1S5QFyMpbmze4GGDhyDPayD44JLubadl4geKTLswRoeCCUlLrTDBOUD4SjAQ/cyMLy3ioW7B9DpMDVeYAK3uGzZsGKnqFKX5IMglcJ9Bwjzzn7igG7TPeTwATnShvse5jhflWoyFpdi7RWefwf05h4nToTojymOHjRs3bucThn3aBATQ8eMw77VS3UoJoxKRqA+jQgJNOKTdklo20iBDVnp3c+wOkJZqlHM6piEGI+pXBV5gHVp3EUkZsvcaPQOD8NvDG2FM0I8jzWMOOPdGg/AYZ2a2GJEwmwjGB5FWcVz3URiBxzhe+mcI6z1Bsq8wtaPk3oEcMWJEGVTmZNuyJirlvdna3LrEj6K0YDpvOSQXWtwsSOxMgFzsKa4XGPx6cnFoiXPGjBk7zzNZCWWhEaFwJBr6LSQqAuaejiAqvxXtgaDwzw+JDamldOSOQNGMA2G2FBR0dVLZINqLmO9Gh6M199BeM0pHwLRwLa5rYAHTzpOzUHY5mPjvGO0puKaCLW5H+S3QXKeAAXqt970BZRliaU//jhoJFpkKt/AwCiNEIpHh0M1mTRzS6m918tfGSe6BkiJ1HRh0HfryPWisKhTZ6+7tC8zLBlQzFmb7cgzg0lS6p8GS8m4QdzXq/CYiM+oms8WlABbhq5FI+LVoLPoW5szzKS4X1DkDwY+mMsOR8LuRaHgFOnWcnyQDzQugQlG1/iPSvBKNhd/EvD7JRPkWJXp/CepajPgVIs0bLMs+z3XcPwVLksZoonkNnP8wCBMNaHs+leMpNgftLMPA3tWAqYHSYZCudD23wbYCV/Wkepahn4+HI6EFYOI7MPo3hNaEhkLqv0Np4ddeRYYUruvIuEM5jwQCdgEYMee7JLyQ2g4Nl2mnD3TapnD03szRYNq/0FYktO8IKfkS9OVPuGagz0st2z4K1vxDEJTnM3l5Nq+Z9latansfDPZDCjO+R78vhPYMAY5diE4uQQkF0BLF+B1HxTenbXc8KjfqgwApWYg5YQkGYgiuOjQSPpza5eU8uA6cpmfh5zKUhUbBHcrsyjCcuQN6OQysRegQDBVdh3sIvGE+DQECb0IcjB/dACehFDxIb47edjz3m4lEy4QVK+gwnA/NJoHov0D+QhhTJ2GQu2Bt3wTi3OqngAUcb/Ac9VnXdR6FFXEo0pyPgTsChtcMT8hxtmdjCDlDv2ckG5PL/GwGkss/ok8LYQyRhjBSBqaqh2QvgS+/lZ53QLdBMJagLS1+AAzD5BVozyRwWRuX/CtcinMQvB5toe1H382kMmiDC7YI996lWngVfwCDPAr7HP6xJmNwQFoxFzsN+l5B6bOV5P7e74A2CUmpBu9udS0XZKlL6Q3GdL4ZPlv2wBvN2TQ97Kk/JK2kzfbW/92Gk08Mxq0jDYerAdrng9sveeSRx78J6GTDOMxHdjptr2pvzyysE2jBHvNMFAbLUqiyPhvoEHcM4oKqQDW2rm1NUBitq8LtrFVC9Nl2Ks3OCd0Tj7cthE83BH7pKJvb9Y2Nje1+EoNYrObTSsmPkyLkylsWj7fO9qMMYKTVQLWNwPxGpxd6V9DIKu52uo/hHt8Otddn/qQXBGTgwEBKj0iOWDCT7dgSC1VdRJvyHa472prb+pyRJk+iy+kyrg1sD1SrkVQ4hYWFS2nLrkl0gICWLt6A3/eWHUg/i+fsUhvztHOlFZAYEbeP/whCflxpb65ly5nc4Y/5wQwGxGWWXfCWxeUcycQcofkci+Mu7VmaSbM86XjOObawZuJOH3MxoLdK0Wj4Bcat2SjzQUvIB7mwZkVi4Rcpzk8Go1tPlJaYifa+A1qf6wezLt01WMAAAx3MOnYuYATdjjxvWraY2xBZ/UU/2ACMAkNRzrK0vMcP6gUYZgz6MNticjb1JyCtWah3Xme6s8ZPcsCArEJ62cDg/ozHwP0gE2yQNcCydwNY7RMh8QFI8DbJxYk1sRpzNAXmx8v0wsJTitZqV5N57yn9EML+G2YnnHUUlD0R4ft8VVWjS8Fcz0nLOgNWcyuc+4dgET+M3+staX2J4rJr4SRFdAdh4EuIu0F8swKEcGqf6Qc9Z0HSi4hz0M4e0wXOyeXrhZ+PfvXJZ0AriGg//Oc5rqcvdj31LXDYxapb9Wu8/asis+lO6/UYiK2cy5tyHPqsJdhrEdL7VwzLBUjbgEzX0CAILcwqD9TjzObmxA0w/aeQO0VhaZaeGo+33ARX4V56BsygQu0Z37qwsPPbtm0fC5dhHq2MkdsAN+jbnqXGwjVZSnGBooAhDNpp8qDuZviFYWHxW+hZpMxivIdC+yySSFueZdlWBdp5l6fcl1DCl+rq6qJ+NJXn96t3uXMHaNnQtFLPTyYSv0e7HsG08PsNB+ARVeLeACSqHn26QVqyFOp3GkVgAHY5woEBP9m27BpQ6Q8g2kOu57aC/BOJ8H6SDHxn3eJWmXneGf6bE4zgmWAGEqJr/JUxg7aGtjiCrwPjoYE8uw5sFuNR9t3w3Wkx47uYR8emy9NkH/jSmAOtv4m514Og3suU+BXmYjvtpntV+96g0ADI9kmo4+5YLHIfnbzwow4oZNQe48F4/DPTIUkzMRCno1MYVLHryQShv04EwaCthKQPw5DPhmofbBVY+7QYT+8d/Z+VIBazUlbvrswsoB3qzRqyZpkXEGYxnqPBug164wojYUJPD/ZY9PGXPoYP2QnI/2nlqXrcK5BvIzSCgyLoRXyf1af+QMyFfIdjXqFNDZeB5J/JxBxYMASGBEPiZnha8SuI6zHLTcN9NNjYJCJU11VHMaQnod8YWPYkjJ4GITitypD47NNiPGzSjMRptoYW3J2Ak5nHc+Ax71gp0TzOMi87/P3VAC3GL3Bd7zHM3WMdR9CcTwTubayU/DwzfQgxWjO1FkR6E8SyMX1/DJK480uHHZ3MgRTgA62f8lwFw6qnJp3uPXN1QMGXYNNJQW6GwpyFQT8MYeeC8Mwc4QKkK89FeAkMoKchxJfDApmMAfgB5sRVIPxp0eiQ3u0xe4VPLEyDvzZ3we6JxYYeQb8JRgI5n0pSJHdYx1k1bO4w/6/zXK9dCHkJCDkI8m3eDZsVI6YvRLs6FfOuQRsnoReXQ2k8TESnOEqXg2y5uwD1d9LequbmDeva29vN/u4DDegzGVmM5lDTUSflTCGiQVXTWWBSU0R8icgracBd4V0LRphOhhMMqPuQ+YFAIFCgmJ37kXD4mBjM7EsDHygr4JdpFuPh674IItHGgiOUtpZHIuEXI9HQS7QwD2aqcx11W3Nz8nWTGbYC5UUpZn6HFLeB0X7C0X7SAoBZjIfmOdMOBEIg5DMtza13o53TYCRNT/WkJsNmSEHLX4rpZZBneQ7aQVm+GI6E1uJqoDv586QRiLlhSp+HsLcj0fCccCT8alWsaihlOJAgYIbMhgTSywGjqohTMdNdppWaDZdnLjrbBqmoQpq1eJ6W3d6yA2KG46T/huyD8OBLA18ESZ+782I85u9mz3XnwYDpLQNW85We63wH5b8LYn0JavQ0NGRx2nG+Dka63k9GaAQzzNPa613IR/yjKO/XmGvnoeZ3KExz73C4ZnOY4r80iXwYC1jpW8Aks6RUI+HybEIf30KOeSD0Nlyd/qVtrjvA5HNA5HqUizmcBfE7CObJThMHHfpVYx8A/ZUlhw8fHqkZbhY3+kszkPDexZo94MPsTx555JHHRwROOy0wzxrrBXdSXfSposUwnDzH6T7W84yRZeZnH0a9OY4zfyfLkl5cfBJ5gzC9KT3Kk5vT6fTKnS1Q1HmkEKrKL5ssPYn5zZzRNQl2QNTU1IzDvKiSySS9YNh5S49BXd2QwY4OfIJj4leKz0E5/b5rrY5VH24pK4q+zke6DvqcEtrYeyaZxgDt8YLB4DsrVqzwYrHQCS5nXcmm5DyKpjTkMcDrGiWEvYhempDxVcIL6PSBA8ORPtRqFnJOPPFEa3XT6rFSSSeRSCxAkA6bUxM6gr6bNNR31NmO+Hfp+ZBDDgmWlBSeiY5WCi0WIRx2wg6EYqHPCcWOhl3Qgr6+Rn2gcFq6RVm5p1QMOKzEFCLMGVwTgLvnpk9FWJpL63XaeIcGmAthJg3BSbvHtLa29n7W3xxZWb9uMQg82gT4sxzyt8CYuYVWvjIhtBcq9IIU1hm0aEL1UbmO4z7ckmj5tp/EoLq6ulhaMo5SnFRPemR/S4UYtIcsW5q8MNi+kUi07vLiIYtQJPRwwLYvdZ3UKYlE2yvIeyLctDeoHdkLhEKV3TVKFW5GXBf6Xt+SSFK/DFFQxk0FgcCNKSd9UTKefCwUDX3LEpI+AEO7QibRllv6Tda60uarAhvLguWH0zEa9P2X8LG/S+OZ7bvrOC9jfOhYazXG5EX0+VjKT2nAsq/hdjEImQyHQ7cg7nrKR4Cxug71XdmaaH06Eqk5gwtpDiJk4wm0Fh1Ah9pc5V0E9r8AVvVFtl202HXZGs9xf4Tnq1HQK+SKKOU9Rc9w/q9B5b3WbBYoy+xVVp77U+V6k3FNBYFty7YfDEdrdnyaQdO3P9B4reHLqvNdx7sYQ2sGaF9hXioIfQ7q7SbCYNj6/ZtOBNSDpucqJCNF9GJhFrXF8dwL0cfzAoGKju1QY0hLRDWEzUG2jJyCMj8xoFOyx2vQHhrp7OUDowQCgOnvzPYdSsN81Qhlft8OWMfCM5iO8BPhDbyI5IehfQFoveFCiuvBMPAm1PFIMwlVkmD2um7UDzTr/1G5REu6siLZRpwIf/Fx+JePNTQ0rKddjuCqO6Ai7kGjzKeM0Pin6RncdPfOh6syMN/N2g4Juo38ZFzXIS8a7NXD/bmNVsOyCWmAykpTD6CsJ1Hm73H1e0oCVe9WNRPAeGdYll2Jjt+OAX0Rz+NDw0If96N3hb8Ojv5kieNTii+ittA+KNyfove+RT09ma082bVzH9m8xCw77iT53hoMcjDAPPMKsrCwkJaJdn4RYvKAFx/P9h33N00EV/DBcRe8kcIwfmdAOo4CTRq11CFDQMU2Ic/biJsGJjgM7f0F5c0CunY2lUu0pIsIQitAwyLR0KOx2sjDUD8/ziTtA/MxFqTNHmPpB6bDHPNB7wkFNKZVcT3VktKy0+xkE8g1ndBjWzsLfhuJhR9CnfeRJJq4fQVnl8BndVPdFfeCBc1qFchBf25gwCBmE1yfGo6GH8QYPAJpMS8lUJYhxkBA/dGcPwgz4AXLss6EyvwymITWAXKkl0C8jfoku4Pqi8Qij9DmCooRTD6OvmjJxV2Iex7tOJ4+GUlxTpmzAN2cR2/YItHwqkht6Dv+qYdeULloxQSaBqgfsIk+C6Gkcy+clvouRPyl+N3nxfiHAo8liTOVkLQYQjADh7rPAktcKhg/r6BA930jNQBg/jxKCD4eWvS94uJNdFKv2wWE5uchbsDbTGlggBFoyyUYh0sw0rmfU0IzTXtziW1+Q1p6iUcE5kpvA5EmYd6ExIpf1NbW0iG5PgafXxb+5ydR33F9A/Wbd9uQ1Fc9pk7HlLjQsuSXheRvgvnvRJRoX9q+PW25Z7iu9yjqGmkJ+8FoLDwv5/Wu3w9+JNeYptAPMOgosDsvQsQKsbWzytq6rQLc3+fY6AdBT09PnzND0GinU88guJlN9Np84hB391OBbV2DenpStU27rJDlgmsYWLueQxLMvFSglwj0TUoYRH9D52mJlb6il9EWA4CResafLO7qroSiqQiWBM0KWlaC0VRaHs0QJgdZFZ2DClKnmC7oo3AxV7lTQXePSO/HoxBOdg+VOQH1DQpsKzAnGfxo+lLRXxPNLWOUq8+FXRC3LeuacG3Y9KW9oX19Ip64BHPsJ1zHfQZtHaO1Z7YHK3gaph+cT8/2A9rz12YORoVu85Ytmxs2bdoC/f1/3c7Ji4qKymjRn0z3cCx8tbSsyzFfLAwGB8300xiA8BvXdHRs3duLdDCDhAoPUplkWSNI0G8M7/lQaWnMS9fjusrT6koknkYDqJj6eib3AMFZd/3GjZ2kErOHxquqqrYhnF45joBGOIHCRo0aFcRMeDoZdIKJ3f69Cyfl3QpFUi+FOBfMVwNJ3+VUAvq0mepb02HUuGEUqNSRUNlmrzSIPgMT7gwiGvc4SamIwlqPRIYcCftoKRp8nTEqOTuc0qOdGWZTqivbDzy5hpuAj9MJAlwLod8XR6M1J1FgDswpBKQ1C/39AY22YeSUQbUs9LS7FvekLa27oLJWwTW4oPe0PdcBssohGC/DTVsQjUUW0zESE5cDskLBBHSiolpaYhmVCSuzIRKp/gLa/nk7YMdQyKvgVBh1if8hgyMeb7nK9dwNyHR2bW3NKL+oXhAz0x1tNR0n5qE7BvN8zF3z0f9FuOaSb7tgwQIHFvrNyINpkb1G82JX97aFsCbGwsJ9slfyeOZFCNKZYzHk98PuuIp+SzqVoDM2DAEPBUgH7cB/Q/VR3yOR0FSKw7w8FRL7yzDoANX8OAr8HhiF7JWXMR9/AfX+inHrH0j/BJjmT0ZiGfsL/cc9ZV7ggMrfRblIg37gIiPrJfRypubawQXH1Fh8fVQPHIv3UM8sWIlmB+XuUFpaSiP2KtTKG1A/q6GWEujHG65yfoQSPkWfbfCTkmKbC8mDNOvNhvPoH0TOj+5FMBh0EfMyXK2ZKK8JcwsdTmsGTVJKiRjcAFif3PicOUA32K3owNy0x3rPA2WB+do/VW9lNdVGz1OvIz0tRKA59PnKzPliQqKp9Wm4kPSKcS2k4ctIMcRx3Wngj0sQZsYJzW/C+LwNgdrxOSn6KJxyb4PN9BbK/Du0mkmLTi6GV0FWc+aLQtTzbDmS3wifGFLLD4f0n48+b4CMXkRqv6u4ay7iYADzdnrLhbE9wnWdR52Ua1wsKXk7xpQ2N9LOUgyVdukyXHyAgtpuBmYP6E0D9TcO0jQVM+AJYNSOokI1is7/UNwAYcOgiUCrbMY0ZlaPPir4q1KDUqnUup2nL9omnE6naXdnDwi/u89O/XsCKu7MaDTcE62NLASxP3xPIY/9CzLK/O9eHMhaK4888vi3QnbPFN3JGKG7MUxo3XjwoMEM1l9t8NDgIZ2bOzcifCCQmO+qt27detB9mvdAhCEwLLNgcWnxvWXlZUfYlr20u7s7XVFW8Wn453CZ+AShpQuC7bJ3OYsxY2ilp7pw27ZtDog7Hm7GSKTfwx+9zOOfBUNg+JuQWnWxYO7/rFu3oR1mekTA2YrHk0vLKoJnwbPcXlZW1lwQLpCDigadPKh80PsVFSVHVFQEh5UMCpZ0bS+7zpK8uKpqyFr4YrQJ/q8g8P91RSyPDwGGwGVlxZ+DpA5KJNrM5wcrKsq+r+FIl5eVvw+H+nNQ3kcwyS3LsT4mGDtbeTrJuLhBwZ+WWtL2+BM4k495XvpsZD+Fc74WBN75izl57Af4a9HyC5zr5/BTZvb+is1MsWe09k4TXN+PuJe40hW4bPrYN9KtVlqvaYm30Ob0Q5D2WU96pSB4OecOnTPqc7Y3j/0HEQ6HPwkRPE4pEQxHw9cXeAVRzdWnhBAFmvNjleKn4FoMu4u+5no8ZZKS/SfX3P+8kncu1HsRV3w41/poFEmvBPe2wpTHPwmyoqKiXCn1kmVZ3YK7SxKJ1uWlg4IrWppbllWUV9RDvle1tLQsGzx4SMLRbmMykXyvaFDJ+0KJuVDDbrCy7F035b1VM7RmZVfX1rZAoGRJR0fHLicT88gjj48atJANNX3ZsGGDh/hBuwW9k/XPBJOK393OCfKlB3LCII+PGMbIor24RNjudPdFFKaUtcdvUUCdXxQIyHOGDKk7FAYY5SGYsuAV2yjrEjCJ2YaSx/6FcZO6u7tVWXnwKsnkIy53m4XWqqpqaKq0tDQE/7cIcy2tSolIJFJ3zDFbOzs2l50C3/iNQIB1W1Z6ZUnJoP8oLw+ehWRzQyFxFGe8Kx5vMxu589i/MAQODwsfCSv407CIN0hmFyM47njO+XCBvsKZcktKSjsrKiu+DcX7pS2bA/M1E2O0zRbTN6VTPfoFKcWPtebN5eXlHUKw7zChh2/d0vmKqSGP/YqMWvXYaVqz17UWjZzz5R7zjoDLUwriLuTcWg6V/ClKppiCbxz4D0uIecqzJNdsXmVlZTfy0rGTBzTXZyvOZmrvg21iz+PDB539oX1LX/akNxvEHeR5qcO01C3wgWNC2E+B2OM1018AMU+Aa2RBeidoLbdYSp0Nd7dj27YtZ4NNRvrlfAxSLx3Hye80+BeBxBx7FJe8nj4ozzSr4VymucfD9BUNTMUTtWDvSKZXQwXPFcKj70RtlNJeTPuWhJDzPK7SUN31rS2t84PlQa602rqudV3+RcO/CHbZ3RCKhiYIzU+C3v5TZn26lb6Al1+4OJhAm75gMR9wn+3LY1cYCTZ/aazQGos51uWczvbaDR/Wjj0wy2GWxcfF48ne71rS4gjm+3MLCgr+7J/fyeMjQnahwxGK/UApRX9UmYiePe9i3ChCduWKNsVHo1Hzx6J2/lu7J/ZdvTLMU1xcvA7qfgHt2g/FMrsZlVRkkLWBuAfcpwEPNBgi1FXXRR0r9d8wpOibkt2wog8DwWEdi1mCiZeVcs+DxA1Rij3Chf61Vvw2pEuCPa7G9Rvu6fGw0cphbS8XWsdQ7PsoeaTg1v3Ie41lBaa4Xvp2RX+P2NMPC0v8kGu1EvP776j+PD46GAlOyzQdbqItOcNhHRdDVdtKsG5Xun93tUvHWCqQdAGs6CGKsWcKCwvfgM97ISzvl1VaNSK+Bk7yXItbryLd4WCUAExw+oso9Iejtkspu2Ghb0gmkj/H73MZV6hL5Ve6/gkQ9I0KkPmr+DmjpaXluczBJnWyzb277ZQ4VSpeC4n8mOu6cJXE15CnJ5VKnQaJLrCs1BuWZdmaM4vyQsWfCedqAef6E5xbdIxirBa8PpXqom08ZLgdqZiqFZq9J0TBcmpAHh8tRDqdpm83zgNxzPncysrKMqjm+XScUwvdDuI3goB/tc2xM9EI1bsUaRdA9HscJ0DHQCsF03CpwBZcdUCNzwHxV3V3l64Coel8zALFocQFn11c3BWH1L+vuBjc3Nzc35+ly+NDA2P/H8zdX+Z2/zXJAAAAAElFTkSuQmCC"/><div class="maclasse-afficherAdroiteViaPosition">Académie XXXX<br/>Circonscription XXX<br/>2024-2025<br/>DITEP<br/>1 rue de l\'école</div>',
        enseignant: 'M. Toto',
        cycleNiveau: '2 / CE1',
        anneeScolaire: '2025-2026',
        projets: [
            {
                id: 'bouchon-p1', nom: 'projet1', description: 'Description globale du <b>projet 1</b>',
                idsEleve: ['bouchon-evnr1v6a'],
                sousProjetParPeriode: [
                    { id: 'bouchon-p1p1', idPeriode: 'bouchon-1', idCompetences: ['M-1-1-1-7', 'M-1-1-1-6'], commentaire: 'comme ceci' },
                    { id: 'bouchon-p1p2', idPeriode: 'bouchon-2', idCompetences: ['M-1-1-1-5', 'M-1-1-1-4'], commentaire: 'comme cela' }
                ]
            },
            {
                id: 'bouchon-p2', nom: 'projet2', description: 'Description globale du <i>projet 2</i>',
                idsEleve: [],
                sousProjetParPeriode: [
                    { id: 'bouchon-p2p1', idPeriode: 'bouchon-1', idCompetences: ['M-1-1-1-3', 'M-1-1-1-2'], commentaire: 'encore ci' },
                    { id: 'bouchon-p2p2', idPeriode: 'bouchon-2', idCompetences: ['M-1-1-1-7', 'M-1-1-1-6'], commentaire: 'encore ça' }
                ]
            }
        ],
        periodes: [
            {
                id: 'bouchon-1',
                debut: new Date('2025-08-31T22:00:00.000Z'),
                fin: new Date('2025-10-17T22:00:00.000Z'),
                nom: 'Periode 1'
            },
            {
                id: 'bouchon-2',
                debut: new Date('2025-11-02T23:00:00.000Z'),
                fin: new Date('2025-12-20T23:00:00.000Z'),
                nom: 'Periode 2'
            },
            {
                id: 'bouchon-3',
                debut: new Date('2026-01-04T23:00:00.000Z'),
                fin: new Date('2026-02-14T23:00:00.000Z'),
                nom: 'Periode 3'
            },
            {
                id: 'bouchon-4',
                debut: new Date('2026-03-01T23:00:00.000Z'),
                fin: new Date('2026-04-10T22:00:00.000Z'),
                nom: 'Periode 4'
            },
            {
                id: 'bouchon-5',
                debut: new Date('2026-04-26T22:00:00.000Z'),
                fin: new Date('2026-07-03T22:00:00.000Z'),
                nom: 'Periode 5'
            }
        ],
        mapLibelleNotes: {
            0: 'non atteint',
            1: 'atteint partiellement',
            2: 'atteint',
            3: 'dépassé',
            n: 'non évalué',
            a: 'absent'
        },
        mapLibelleStatutEleve: {
            0: 'hors établissement',
            1: 'dans l\'établissement',
            2: 'dans la classe'
        },
        mapTypeContact: {
            P: 'Père',
            M: 'Mère',
            S: 'Structure',
            F: 'Famille d\'accueil',
            A: 'Autre'
        },
        mapRaisonAbsence: {
            I: 'Inclusion',
            O: 'Orthophoniste',
            PM: 'Psychomotricité',
            P: 'Psychologue',
            A: 'Autre'
        },
        eleves: [
            {
                id: 'bouchon-hfys3v9z',
                nom: 'NOM0',
                prenom: 'TOTO_HORS_ECOLE',
                dateNaissance: new Date('2009-01-01'),
                contacts: [
                    { id: 'bouchon-1', type: 'P', nom: 'M. NOM DU PAPA parfois un peu long dans les formulaire', email: 'email.du.papa.nom@avec.un.dns.a.ralonge.com', adressePostale: 'Petite maison dans la prairie au milieu de nulle part', telephone: '0612345678' },
                    { id: 'bouchon-2', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                absences: [
                    { id: 'bouchon-3', raison: 'I', jour: 1, heureDebut: '8h15', heureFin: '9h15' },
                    { id: 'bouchon-4', raison: 'O', jour: 2, heureDebut: '8h15', heureFin: '10h15', frequence: 0 },
                    { id: 'bouchon-5', raison: 'P', jour: 3, heureDebut: '8h15', heureFin: '11h15', frequence: 1 },
                    { id: 'bouchon-6', raison: 'A', jour: 4, heureDebut: '8h15', heureFin: '12h00', frequence: 2 },
                ],
                statut: '0',
                bilans: 'bla bla bla',
                inclusion: {
                    id: 'bouchon-7', ecoleNom: 'Nom de l\'écoole du coin', ecoleAdresse: 'Le coin de la rue qui peut parfois être long 999999 Maville',
                    nomContact: 'Monsieur le directeur de l\'école', emailContact: 'emailDuDirecteurDeLecole@nomDeDomaineAralonge.fr', telContact: '0123456789',
                    niveau: 'CE1', enseignant: 'le meilleur enseignant du monde évidemment dont le prénom m\'a échappé'
                },
                cursus: [
                    {
                        id: '2021b', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022b', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023b', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024b', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025b', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: 'acc',
                datesPPA: 'ppa',
                datesESS: 'ess',
                notes: [],
                commentairesDePeriode: [],
                parcoursDePeriode: []
            },
            {
                id: 'bouchon-evnr1v6a',
                nom: 'NOM1',
                prenom: 'PRENOM1',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-8', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-9', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '1',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: '2021c', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022c', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023c', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024c', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025c', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 2, heureDebut: '8H00', heureFin: '12h00' },
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 3, heureDebut: '8H00', heureFin: '12h00' },
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 4, heureDebut: '8H00', heureFin: '12h00' }
                ],
                inclusion: { id: 'bouchon-10' },
                notes: [
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep1',
                        idItem: 'M-1-1-1-7',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep2',
                        idItem: 'M-1-1-1-6',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep3',
                        idItem: 'M-1-1-1-5',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep4',
                        idItem: 'M-1-1-1-4',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        commentaireEvaluationPublic: 'comm bulletin note P1',
                        dateCreation: new Date('2025-09-15T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n1',
                        idItem: 'M-2-2-4',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n2',
                        idItem: 'M-3-1-3',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n2'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n3',
                        idItem: 'M-3-1-1',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n3'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n4',
                        idItem: 'M-3-1-2',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n4'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n5',
                        idItem: 'M-3-1',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n5'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n6',
                        idItem: 'M-3-2-2',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n6'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n7',
                        idItem: 'M-3-2-1',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n7'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n8',
                        idItem: 'M-3-3-5',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n8'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n9',
                        idItem: 'M-3-3-4',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n9'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n10',
                        idItem: 'M-3-3-3',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n10'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n11',
                        idItem: 'M-3-3-2',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n11'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n12',
                        idItem: 'M-3-3-1',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n12'
                    },
                    {
                        commentaireEvaluationPublic: 'eval P2',
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n13',
                        idItem: 'M-4-2-4',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta P2 e1n13',
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n14',
                        idItem: 'M-4-2-3',
                        constatEnPreparation: 'consta P2 encore e1n14'
                    }
                ],
                commentairesDePeriode: [
                    { id: 'cc1', idPeriode: 'bouchon-1', commentaire: 'Bravo pour cette période 1!' },
                    { id: 'cc2', idPeriode: 'bouchon-2', commentaire: 'Bravo pour cette période 2!' },
                    { id: 'cc3', idPeriode: 'bouchon-3', commentaire: 'Bravo pour cette période 3!' },
                    { id: 'cc4', idPeriode: 'bouchon-4', commentaire: 'Bravo pour cette période 4!' }
                ],
                parcoursDePeriode: [
                    { id: 'cp1', idPeriode: 'bouchon-1', commentaire: 'Bravo pour cette période 1!' }
                ]
            },
            {
                id: 'bouchon-rvns1q6a',
                nom: 'NOM2',
                prenom: 'PRENOM2',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-11', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-12', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '2',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: '2021', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [],
                inclusion: { id: 'bouchon-13' },
                notes: [
                    {
                        commentaireEvaluationPublic: 'commentaire P1',
                        dateCreation: new Date('2025-09-16T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n1',
                        idItem: 'M-4-2-4',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e2n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaire seconde competence sur le domaine',
                        dateCreation: new Date('2025-09-17T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n2',
                        idItem: 'M-4-2-3',
                        valeurEvaluation: '2',
                        constatEnPreparation: 'consta Prépa P1 e2n2'
                    }
                ],
                commentairesDePeriode: [],
                parcoursDePeriode: []
            },
            {
                id: 'bouchon-lkjsf2d3',
                nom: 'NOM3',
                prenom: 'PRENOM3',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-14', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-15', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '2',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: '2021a', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022a', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023a', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024a', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025a', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [],
                inclusion: { id: 'bouchon-16', },
                notes: [],
                commentairesDePeriode: [],
                parcoursDePeriode: []
            }
        ],
        competences: [
            {
                "id": "M",
                "parent": "#",
                "text": "Mathématiques"
            },
            {
                "id": "MC1",
                "parent": "M",
                "text": "Cycle 1"
            },
            {
                "id": "M-1",
                "parent": "MC1",
                "text": "Découvrir les nombres"
            },
            {
                "id": "M-1-1",
                "parent": "M-1",
                "text": "Exprimer une quantité par un nombre"
            },
            {
                "id": "M-1-1-1",
                "parent": "M-1-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-1-1-1-1",
                "parent": "M-1-1-1",
                "text": "Comprendre qu'une quantité d'objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-1-2",
                "parent": "M-1-1-1",
                "text": "Comprendre que si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant dans la suite orale des noms des nombres."
            },
            {
                "id": "M-1-1-1-3",
                "parent": "M-1-1-1",
                "text": "Comprendre que dans la suite orale des noms des nombres, chaque nombre s'obtient en ajoutant un au nombre précédent"
            },
            {
                "id": "M-1-1-1-4",
                "parent": "M-1-1-1",
                "text": "Dénombrer une collection d'objets (jusqu'à trois, voire quatre)."
            },
            {
                "id": "M-1-1-1-5",
                "parent": "M-1-1-1",
                "text": "Constituer une collection (jusqu'à trois, voire quatre objets) d'un cardinal donné."
            },
            {
                "id": "M-1-1-1-6",
                "parent": "M-1-1-1",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-1-7",
                "parent": "M-1-1-1",
                "text": "Composer et décomposer des nombres (deux, trois, voire quatre)."
            },
            {
                "id": "M-1-1-1-8",
                "parent": "M-1-1-1",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres"
            },
            {
                "id": "M-1-1-1-9",
                "parent": "M-1-1-1",
                "text": "Associer une quantité, le nom d'un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-1-10",
                "parent": "M-1-1-1",
                "text": "Connaitre la comptine numérique de un à six."
            },
            {
                "id": "M-1-1-2",
                "parent": "M-1-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-1-2-1",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension qu'une quantité d'objets ne dépend ni de leur nature ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-2-2",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension des faits suivants : si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant."
            },
            {
                "id": "M-1-1-2-3",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension des faits suivants : dans la suite orale des nombres, chaque nombre s'obtient en ajoutant un au nombre précédent."
            },
            {
                "id": "M-1-1-2-4",
                "parent": "M-1-1-2",
                "text": "Parcourir une collection en passant une et une seule fois par chacun de ses éléments."
            },
            {
                "id": "M-1-1-2-5",
                "parent": "M-1-1-2",
                "text": "Dénombrer une collection d'objets (jusqu'à six)."
            },
            {
                "id": "M-1-1-2-6",
                "parent": "M-1-1-2",
                "text": "Constituer une collection d'un cardinal donné (jusqu'à six objets)."
            },
            {
                "id": "M-1-1-2-7",
                "parent": "M-1-1-2",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-2-8",
                "parent": "M-1-1-2",
                "text": "Composer et décomposer des nombres inférieurs ou égaux à six."
            },
            {
                "id": "M-1-1-2-9",
                "parent": "M-1-1-2",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres."
            },
            {
                "id": "M-1-1-2-10",
                "parent": "M-1-1-2",
                "text": "Associer une quantité, le nom d'un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-2-11",
                "parent": "M-1-1-2",
                "text": "Écrire en chiffres les nombres de un à six."
            },
            {
                "id": "M-1-1-2-12",
                "parent": "M-1-1-2",
                "text": "Connaitre la comptine numérique de un à douze."
            },
            {
                "id": "M-1-1-3",
                "parent": "M-1-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-1-3-1",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension qu'une quantité d'objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-3-2",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension des faits suivants : si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant dans la suite orale des noms des nombres."
            },
            {
                "id": "M-1-1-3-3",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension des faits suivants : dans la suite orale des nombres, chaque nombre s'obtient en ajoutant un au nombre précédent."
            },
            {
                "id": "M-1-1-3-4",
                "parent": "M-1-1-3",
                "text": "Poursuivre les stratégies de parcours d'une collection en passant une et une seule fois par chacun de ses éléments."
            },
            {
                "id": "M-1-1-3-5",
                "parent": "M-1-1-3",
                "text": "Dénombrer une collection d'objets (jusqu'à dix, voire au-delà)."
            },
            {
                "id": "M-1-1-3-6",
                "parent": "M-1-1-3",
                "text": "Constituer une collection d'un cardinal donné (jusqu'à dix, voire au-delà)."
            },
            {
                "id": "M-1-1-3-7",
                "parent": "M-1-1-3",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-3-8",
                "parent": "M-1-1-3",
                "text": "Composer et décomposer des nombres inférieurs ou égaux à dix, voire au-delà."
            },
            {
                "id": "M-1-1-3-9",
                "parent": "M-1-1-3",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres. Cela permet d'installer le fait que, dans une composition, l'ordre ne compte pas."
            },
            {
                "id": "M-1-1-3-10",
                "parent": "M-1-1-3",
                "text": "Surcompter (c'est-à-dire compter de un en un à partir d'un nombre donné)."
            },
            {
                "id": "M-1-1-3-11",
                "parent": "M-1-1-3",
                "text": "Associer une quantité, le nom d'un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-3-12",
                "parent": "M-1-1-3",
                "text": "Écrire en chiffres les nombres de un à dix."
            },
            {
                "id": "M-1-1-3-13",
                "parent": "M-1-1-3",
                "text": "Connaitre et utiliser la comptine numérique jusqu'à trente."
            },
            {
                "id": "M-1-2",
                "parent": "M-1",
                "text": "Exprimer un rang ou une position par un nombre"
            },
            {
                "id": "M-1-2-1",
                "parent": "M-1-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-2-1-1",
                "parent": "M-1-2-1",
                "text": "Comprendre la notion de rang."
            },
            {
                "id": "M-1-2-1-2",
                "parent": "M-1-2-1",
                "text": "Déterminer l'effet d'un déplacement sur une position."
            },
            {
                "id": "M-1-2-1-3",
                "parent": "M-1-2-1",
                "text": "Se familiariser avec le début de la bande numérique."
            },
            {
                "id": "M-1-2-2",
                "parent": "M-1-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-2-2-1",
                "parent": "M-1-2-2",
                "text": "Comprendre la notion de rang d'un objet."
            },
            {
                "id": "M-1-2-2-2",
                "parent": "M-1-2-2",
                "text": "Déterminer l'effet d'un déplacement sur une position."
            },
            {
                "id": "M-1-2-2-3",
                "parent": "M-1-2-2",
                "text": "Comprendre le lien entre un ajout et un avancement et celui entre un retrait et un recul."
            },
            {
                "id": "M-1-2-2-4",
                "parent": "M-1-2-2",
                "text": "Construire la bande numérique jusqu'à dix."
            },
            {
                "id": "M-2",
                "parent": "MC1",
                "text": "Utiliser les nombres pour résoudre des problèmes"
            },
            {
                "id": "M-2-1",
                "parent": "M-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-2-1-1",
                "parent": "M-2-1",
                "text": "Recherche du tout ou d'une partie dans un problème de parties-tout."
            },
            {
                "id": "M-2-2",
                "parent": "M-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-2-2-1",
                "parent": "M-2-2",
                "text": "Rechercher le tout ou une partie dans un problème de parties-tout."
            },
            {
                "id": "M-2-2-2",
                "parent": "M-2-2",
                "text": "Trouver une position finale à partir d'une position initiale et d'un déplacement sur une piste."
            },
            {
                "id": "M-2-2-3",
                "parent": "M-2-2",
                "text": "Rechercher le tout dans un problème de groupements."
            },
            {
                "id": "M-2-2-4",
                "parent": "M-2-2",
                "text": "Rechercher la valeur d'une part dans un problème de partage équitable."
            },
            {
                "id": "M-2-3",
                "parent": "M-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-2-3-1",
                "parent": "M-2-3",
                "text": "Déterminer le tout ou une partie dans un problème de parties-tout (d'abord deux parties, puis éventuellement trois)."
            },
            {
                "id": "M-2-3-2",
                "parent": "M-2-3",
                "text": "Déterminer la quantité d'objets ayant été ajoutée ou retirée  à une collection à partir de ses quantités initiale et finale."
            },
            {
                "id": "M-2-3-3",
                "parent": "M-2-3",
                "text": "Déterminer la position finale (respectivement initiale) à partir de la position initiale (respectivement finale) et d'un déplacement sur une piste du type du jeu de l'oie ou sur la bande numérique."
            },
            {
                "id": "M-2-3-4",
                "parent": "M-2-3",
                "text": "Déterminer le cardinal d'une collection à partir de celui d'une autre collection et de l'écart entre les deux."
            },
            {
                "id": "M-2-3-5",
                "parent": "M-2-3",
                "text": "Déterminer le tout dans un problème de groupement d'objets."
            },
            {
                "id": "M-2-3-6",
                "parent": "M-2-3",
                "text": "Déterminer la valeur d'une part dans un problème de partage équitable (avec éventuelement un reste)."
            },
            {
                "id": "M-3",
                "parent": "MC1",
                "text": "Explorer les solides et les formes planes"
            },
            {
                "id": "M-3-1",
                "parent": "M-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-3-1-1",
                "parent": "M-3-1",
                "text": "Reconnaitre, trier et classer des objets selon leur forme."
            },
            {
                "id": "M-3-1-2",
                "parent": "M-3-1",
                "text": "Percevoir l'invariance de la forme d'un objet par rapport aux déplacements qu'il peut subir."
            },
            {
                "id": "M-3-1-3",
                "parent": "M-3-1",
                "text": "Reproduire des assemblages de solides ou de formes planes."
            },
            {
                "id": "M-3-2",
                "parent": "M-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-3-2-1",
                "parent": "M-3-2",
                "text": "Reconnaitre et classer des solides (cube, boule, pyramide à base carrée, cylindre) et des formes géométriques planes (triangle, carré, disque)."
            },
            {
                "id": "M-3-2-2",
                "parent": "M-3-2",
                "text": "Reproduire des assemblages de solides ou de formes planes (au maximum cinq)."
            },
            {
                "id": "M-3-3",
                "parent": "M-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-3-3-1",
                "parent": "M-3-3",
                "text": "Décrire quelques solides simples : cube, pavé, boule, pyramides à base carrée ou triangulaire, cylindre, cône."
            },
            {
                "id": "M-3-3-2",
                "parent": "M-3-3",
                "text": "Reconnaitre, trier et classer des formes géométriques planes, indépendamment d'autres critères comme la couleur, la taille, l'orientation."
            },
            {
                "id": "M-3-3-3",
                "parent": "M-3-3",
                "text": "Décrire et nommer quelques figures géométriques simples : carré, rectangle, triangle, disque."
            },
            {
                "id": "M-3-3-4",
                "parent": "M-3-3",
                "text": "Reproduire des assemblages de solides (au maximum cinq) et de formes planes (au maximum huit)."
            },
            {
                "id": "M-3-3-5",
                "parent": "M-3-3",
                "text": "S'approprier la règle comme outil de tracé."
            },
            {
                "id": "M-4",
                "parent": "MC1",
                "text": "Explorer des grandeurs"
            },
            {
                "id": "M-4-1",
                "parent": "M-4",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-4-1-1",
                "parent": "M-4-1",
                "text": "La longueur : reconnaitre un objet de même longueur qu'un objet donné."
            },
            {
                "id": "M-4-1-2",
                "parent": "M-4-1",
                "text": "La longueur : comparer des objets selon leur longueur."
            },
            {
                "id": "M-4-2",
                "parent": "M-4",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-4-2-1",
                "parent": "M-4-2",
                "text": "La longueur : comparer directement des longueurs d'objets rectilignes et verbaliser le résultat."
            },
            {
                "id": "M-4-2-2",
                "parent": "M-4-2",
                "text": "La longueur : classer des objets rectilignes selon leur longueur."
            },
            {
                "id": "M-4-2-3",
                "parent": "M-4-2",
                "text": "La longueur : ordonner des objets rectilignes selon leur longueur et verbaliser le résultat."
            },
            {
                "id": "M-4-2-4",
                "parent": "M-4-2",
                "text": "La masse : comparer les masses de deux objets."
            },
            {
                "id": "M-4-3",
                "parent": "M-4",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-4-3-1",
                "parent": "M-4-3",
                "text": "La longueur : comparer indirectement des longueurs. d'objets rectilignes"
            },
            {
                "id": "M-4-3-2",
                "parent": "M-4-3",
                "text": "La longueur : ordonner des objets rectilignes selon leur longueur (au maximum cinq)."
            },
            {
                "id": "M-4-3-3",
                "parent": "M-4-3",
                "text": "La longueur : produire un objet rectiligne de même longueur qu'un objet donné."
            },
            {
                "id": "M-4-3-4",
                "parent": "M-4-3",
                "text": "La masse : ordonner les masses de trois objets et verbaliser les résultats."
            },
            {
                "id": "M-4-3-5",
                "parent": "M-4-3",
                "text": "La masse : reconnaitre l'égalité de deux masses et verbaliser le résultat."
            },
            {
                "id": "M-5",
                "parent": "MC1",
                "text": "Se familiariser avec les motifs organisés"
            },
            {
                "id": "M-5-1",
                "parent": "M-5",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-5-1-1",
                "parent": "M-5-1",
                "text": "Mémoriser un motif répétitif très simple."
            },
            {
                "id": "M-5-1-2",
                "parent": "M-5-1",
                "text": "Reproduire un motif répétitif à l'identique."
            },
            {
                "id": "M-5-2",
                "parent": "M-5",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-5-2-1",
                "parent": "M-5-2",
                "text": "Mémoriser un motif répétitif simple."
            },
            {
                "id": "M-5-2-2",
                "parent": "M-5-2",
                "text": "Reconnaitre un motif répétitif à ses régularités."
            },
            {
                "id": "M-5-2-3",
                "parent": "M-5-2",
                "text": "Décrire oralement des motifs répétitifs simples  de différentes natures, sans nécessairement recourir au vocabulaire spécialisé."
            },
            {
                "id": "M-5-2-4",
                "parent": "M-5-2",
                "text": "Prolonger l'amorce d'un motif répétitif et verbaliser la règle de prolongement utilisée."
            },
            {
                "id": "M-5-3",
                "parent": "M-5",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-5-3-1",
                "parent": "M-5-3",
                "text": "Repérer et décrire la structure d'un motif évolutif."
            },
            {
                "id": "M-5-3-2",
                "parent": "M-5-3",
                "text": "Identifier la structure d'un motif répétitif ou évolutif indépendamment des éléments physiques qui le composent."
            },
            {
                "id": "M-5-3-3",
                "parent": "M-5-3",
                "text": "Créer des motifs de différentes natures."
            },
            {
                "id": "F",
                "parent": "#",
                "text": "Français"
            },
            {
                "id": "FC1",
                "parent": "F",
                "text": "Cycle 1"
            },
            {
                "id": "F-1",
                "parent": "FC1",
                "text": "Acquérir le langage oral"
            },
            {
                "id": "F-1-1",
                "parent": "F-1",
                "text": "Enrichir son vocabulaire"
            },
            {
                "id": "F-1-1-1",
                "parent": "F-1-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-1-1-1",
                "parent": "F-1-1-1",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-1-2",
                "parent": "F-1-1-1",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-1-2",
                "parent": "F-1-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-1-2-1",
                "parent": "F-1-1-2",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-2-2",
                "parent": "F-1-1-2",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-1-3",
                "parent": "F-1-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-1-3-1",
                "parent": "F-1-1-3",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-3-2",
                "parent": "F-1-1-3",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-2",
                "parent": "F-1",
                "text": "Développer sa syntaxe"
            },
            {
                "id": "F-1-2-1",
                "parent": "F-1-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-2-1-1",
                "parent": "F-1-2-1",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-1-2",
                "parent": "F-1-2-1",
                "text": "Construire à l'oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-1-3",
                "parent": "F-1-2-1",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-2-2",
                "parent": "F-1-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-2-2-1",
                "parent": "F-1-2-2",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-2-2",
                "parent": "F-1-2-2",
                "text": "Construire à l'oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-2-3",
                "parent": "F-1-2-2",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-2-3",
                "parent": "F-1-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-2-3-1",
                "parent": "F-1-2-3",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-3-2",
                "parent": "F-1-2-3",
                "text": "Construire à l'oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-3-3",
                "parent": "F-1-2-3",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-3",
                "parent": "F-1",
                "text": "Articuler distinctement"
            },
            {
                "id": "F-1-3-1",
                "parent": "F-1-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-3-1-1",
                "parent": "F-1-3-1",
                "text": "Articuler distinctement les couples de consonnes proches t/k, f/s, m/n"
            },
            {
                "id": "F-1-3-2",
                "parent": "F-1-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-3-2-1",
                "parent": "F-1-3-2",
                "text": "Distinguer et produire correctement les nasales é/in, a/an, o/on"
            },
            {
                "id": "F-1-3-2-2",
                "parent": "F-1-3-2",
                "text": "Articuler distinctement les couples de consonnes proches suivants : f/v, s/z, p/b, t/d, k/g"
            },
            {
                "id": "F-1-3-3",
                "parent": "F-1-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-3-3-1",
                "parent": "F-1-3-3",
                "text": "Prononcer correctement les couples de consonnes proches suivants : ch/s, ch/j, ch/z"
            },
            {
                "id": "F-1-3-3-2",
                "parent": "F-1-3-3",
                "text": "Prononcer correctement les doubles consonnes br/cr/bl/pl/sl"
            },
            {
                "id": "F-1-4",
                "parent": "F-1",
                "text": "Produire des discours variés"
            },
            {
                "id": "F-1-4-1",
                "parent": "F-1-4",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-4-1-1",
                "parent": "F-1-4-1",
                "text": "Entrer en communication verbale avec un adulte ou un autre élève"
            },
            {
                "id": "F-1-4-1-2",
                "parent": "F-1-4-1",
                "text": "Dire ce qu'on fait"
            },
            {
                "id": "F-1-4-1-3",
                "parent": "F-1-4-1",
                "text": "Dire ce qu'on a fait et, peu à peu, ce qu'on va faire"
            },
            {
                "id": "F-1-4-1-4",
                "parent": "F-1-4-1",
                "text": "Prendre part à l'oralisation d'un court texte mémorisé"
            },
            {
                "id": "F-1-4-2",
                "parent": "F-1-4",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-4-2-1",
                "parent": "F-1-4-2",
                "text": "Dire ce qu'on va faire"
            },
            {
                "id": "F-1-4-2-2",
                "parent": "F-1-4-2",
                "text": "Dire comment on a fait ou comment on va faire"
            },
            {
                "id": "F-1-4-2-3",
                "parent": "F-1-4-2",
                "text": "Oraliser un court texte mémorisé"
            },
            {
                "id": "F-1-4-2-4",
                "parent": "F-1-4-2",
                "text": "Participer à des échanges en restant dans le propos"
            },
            {
                "id": "F-1-4-3",
                "parent": "F-1-4",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-4-3-1",
                "parent": "F-1-4-3",
                "text": "Décrire une action ou une activité qui a été menée par un autre élève"
            },
            {
                "id": "F-1-4-3-2",
                "parent": "F-1-4-3",
                "text": "Se faire comprendre, par le truchement du langage, d'un adulte qui ne connait rien à la situation évoquée"
            },
            {
                "id": "F-1-4-3-3",
                "parent": "F-1-4-3",
                "text": "Participer à une conversation avec un adulte ou des pairs et reformuler son propos s'il n'a pas été compris"
            },
            {
                "id": "F-1-4-3-4",
                "parent": "F-1-4-3",
                "text": "Émettre une hypothèse"
            },
            {
                "id": "F-2",
                "parent": "FC1",
                "text": "Passer de l'oral à l'écrit : se préparer à apprendre à lire"
            },
            {
                "id": "F-2-1",
                "parent": "F-2",
                "text": "Acquérir les habiletés phonologiques et le principe alphabétique"
            },
            {
                "id": "F-2-1-1",
                "parent": "F-2-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-1-1-1",
                "parent": "F-2-1-1",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-1-1-1",
                "parent": "F-2-1-1-1",
                "text": "Identifier les sons de la langue, lors de situations d'écoute proposées par le professeur."
            },
            {
                "id": "F-2-1-1-1-2",
                "parent": "F-2-1-1-1",
                "text": "Identifier un mot donné à l'oral dans une phrase, dans un texte."
            },
            {
                "id": "F-2-1-1-2",
                "parent": "F-2-1-1",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-1-2-1",
                "parent": "F-2-1-1-2",
                "text": "Scander les syllabes d'un mot"
            },
            {
                "id": "F-2-1-1-2-2",
                "parent": "F-2-1-1-2",
                "text": "Dire des comptines courtes comprenant des phonèmes proches."
            },
            {
                "id": "F-2-1-1-3",
                "parent": "F-2-1-1",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-1-3-1",
                "parent": "F-2-1-1-3",
                "text": "Reconnaitre et nommer certaines lettres de son prénom écrit en capitales."
            },
            {
                "id": "F-2-1-2",
                "parent": "F-2-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-1-2-1",
                "parent": "F-2-1-2",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-2-1-1",
                "parent": "F-2-1-2-1",
                "text": "Utiliser la voix parlée, chantée et les possibilités vocales (imitation de sons, onomatopées) afin d'expérimenter différents sons."
            },
            {
                "id": "F-2-1-2-1-2",
                "parent": "F-2-1-2-1",
                "text": "Entendre, discriminer des phonèmes"
            },
            {
                "id": "F-2-1-2-2",
                "parent": "F-2-1-2",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-2-2-1",
                "parent": "F-2-1-2-2",
                "text": "Scander les syllabes d'un mot."
            },
            {
                "id": "F-2-1-2-2-2",
                "parent": "F-2-1-2-2",
                "text": "Manipuler les syllabes d'un mot (ajout, suppression, permutation, répétition, fusion, substitution)."
            },
            {
                "id": "F-2-1-2-2-3",
                "parent": "F-2-1-2-2",
                "text": "Dire des comptines courtes comprenant des phonèmes proches."
            },
            {
                "id": "F-2-1-2-3",
                "parent": "F-2-1-2",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-2-3-1",
                "parent": "F-2-1-2-3",
                "text": "Nommer les lettres de son prénom et quelques lettres de mots connus (le professeur nomme systématiquement les lettres)."
            },
            {
                "id": "F-2-1-2-3-2",
                "parent": "F-2-1-2-3",
                "text": "Connaitre la correspondance entre les lettres scriptes majuscules et minuscules et les lettres cursives minuscules."
            },
            {
                "id": "F-2-1-2-4",
                "parent": "F-2-1-2",
                "text": "Connaitre le son des lettres"
            },
            {
                "id": "F-2-1-2-4-1",
                "parent": "F-2-1-2-4",
                "text": "Donner les valeurs sonores de quelques lettres de mots simples connus."
            },
            {
                "id": "F-2-1-3",
                "parent": "F-2-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-1-3-1",
                "parent": "F-2-1-3",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-3-1-1",
                "parent": "F-2-1-3-1",
                "text": "Utiliser les possibilités sonores de la voix."
            },
            {
                "id": "F-2-1-3-1-2",
                "parent": "F-2-1-3-1",
                "text": "Augmenter sa mémoire auditive et sa capacité de concentration."
            },
            {
                "id": "F-2-1-3-2",
                "parent": "F-2-1-3",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-3-2-1",
                "parent": "F-2-1-3-2",
                "text": "Supprimer, ajouter, remplacer, inverser, substituer, fusionner les syllabes d'un mot."
            },
            {
                "id": "F-2-1-3-2-2",
                "parent": "F-2-1-3-2",
                "text": "Repérer et produire des rimes et des assonances."
            },
            {
                "id": "F-2-1-3-2-3",
                "parent": "F-2-1-3-2",
                "text": "Entendre, discriminer, manipuler des phonèmes"
            },
            {
                "id": "F-2-1-3-3",
                "parent": "F-2-1-3",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-3-3-1",
                "parent": "F-2-1-3-3",
                "text": "Connaitre le nom des lettres de l'alphabet."
            },
            {
                "id": "F-2-1-3-3-2",
                "parent": "F-2-1-3-3",
                "text": "Connaitre les différentes graphies d'une même lettre (majuscule lettre capitale ; minuscules scriptes ; cursives)."
            },
            {
                "id": "F-2-1-3-3-3",
                "parent": "F-2-1-3-3",
                "text": "Distinguer des lettres visuellement proches (b/d, c/e/o, p/q) grâce à leur écriture cursive et les nommer correctement."
            },
            {
                "id": "F-2-1-3-4",
                "parent": "F-2-1-3",
                "text": "Connaitre le son des lettres"
            },
            {
                "id": "F-2-1-3-4-1",
                "parent": "F-2-1-3-4",
                "text": "Connaitre le nom des lettres de l'alphabet et leur valeur sonore hormis les occlusives."
            },
            {
                "id": "F-2-1-3-4-2",
                "parent": "F-2-1-3-4",
                "text": "Discriminer des mots auditivement proches."
            },
            {
                "id": "F-2-2",
                "parent": "F-2",
                "text": "S'éveiller à la diversité linguistique"
            },
            {
                "id": "F-2-2-1",
                "parent": "F-2-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-2-1-1",
                "parent": "F-2-2-1",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-2-1-1-1",
                "parent": "F-2-2-1-1",
                "text": "Écouter des chants, des comptines, des histoires connues dans des versions en français et en langue étrangère."
            },
            {
                "id": "F-2-2-2",
                "parent": "F-2-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-2-2-1",
                "parent": "F-2-2-2",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-2-2-1-1",
                "parent": "F-2-2-2-1",
                "text": "Participer à des jeux dans une autre langue : jeux de doigts, rondes, jeux dansés, mimes, jeux de cour, jeux de cartes."
            },
            {
                "id": "F-2-2-2-1-2",
                "parent": "F-2-2-2-1",
                "text": "Comparer des histoires lues en français et dans une autre langue."
            },
            {
                "id": "F-2-3",
                "parent": "F-2",
                "text": "Écouter et comprendre différentes formes d'écrits"
            },
            {
                "id": "F-2-3-1",
                "parent": "F-2-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-3-1-1",
                "parent": "F-2-3-1",
                "text": "Découvrir les supports de l'écrit"
            },
            {
                "id": "F-2-3-1-1-1",
                "parent": "F-2-3-1-1",
                "text": "Repérer les outils fonctionnels utilisés quotidiennement en classe (étiquette du prénom, emploi du temps, affiches, etc.)."
            },
            {
                "id": "F-2-3-1-1-2",
                "parent": "F-2-3-1-1",
                "text": "Reconnaitre quelques écrits utilisés et produits en classe (comptines, recettes, carnet de lecteur)"
            },
            {
                "id": "F-2-3-1-2",
                "parent": "F-2-3-1",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-1-2-1",
                "parent": "F-2-3-1-2",
                "text": "Reconnaitre un personnage, le nommer et le situer dans les illustrations."
            },
            {
                "id": "F-2-3-1-2-2",
                "parent": "F-2-3-1-2",
                "text": "Comprendre des histoires où l'enchainement des actions peut être rattaché à des expériences connues de la vie quotidienne (le bain, le coucher, etc.)"
            },
            {
                "id": "F-2-3-2",
                "parent": "F-2-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-3-2-1",
                "parent": "F-2-3-2",
                "text": "Découvrir les supports de l'écrit"
            },
            {
                "id": "F-2-3-2-1-1",
                "parent": "F-2-3-2-1",
                "text": "Reconnaitre, nommer et identifier la fonction de différents écrits rencontrés dans la vie courante."
            },
            {
                "id": "F-2-3-2-1-2",
                "parent": "F-2-3-2-1",
                "text": "Prendre conscience de la notion de destinataire et de contenu de la requête adressée par un écrit."
            },
            {
                "id": "F-2-3-2-1-3",
                "parent": "F-2-3-2-1",
                "text": "Identifier et utiliser quotidiennement des outils fonctionnels pour se repérer, s'organiser, ranger."
            },
            {
                "id": "F-2-3-2-2",
                "parent": "F-2-3-2",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-2-2-1",
                "parent": "F-2-3-2-2",
                "text": "Identifier et décrire le personnage principal et les personnages secondaires."
            },
            {
                "id": "F-2-3-2-2-2",
                "parent": "F-2-3-2-2",
                "text": "Comprendre des histoires dont les actions sont organisées autour d'une structure répétitive (rencontres successives) et commencer à comprendre les informations implicites (émotions, états et sentiments des personnages)."
            },
            {
                "id": "F-2-3-3",
                "parent": "F-2-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-3-3-1",
                "parent": "F-2-3-3",
                "text": "Découvrir les supports de l'écrit"
            },
            {
                "id": "F-2-3-3-1-1",
                "parent": "F-2-3-3-1",
                "text": "Différencier les types d'écrits et associer un écrit à un projet d'écriture ou de communication."
            },
            {
                "id": "F-2-3-3-1-2",
                "parent": "F-2-3-3-1",
                "text": "Repérer et dégager la structure et l'organisation (mise en page, typographie) de formes d'écrits fréquemment utilisés en classe (structure de la lettre, de la recette, du conte, d'un écrit documentaire, d'une notice de fabrication)"
            },
            {
                "id": "F-2-3-3-2",
                "parent": "F-2-3-3",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-3-2-1",
                "parent": "F-2-3-3-2",
                "text": "Construire les caractéristiques des personnages archétypaux (loup, princesse, ogre, sorcière, renard, fée, etc.)."
            },
            {
                "id": "F-2-3-3-2-2",
                "parent": "F-2-3-3-2",
                "text": "Comprendre des histoires où l'enchainement des actions est lié au destin de personnages centraux ou secondaires qui évoluent et interagissent, dans des lieux diversifiés."
            },
            {
                "id": "F-2-3-3-2-3",
                "parent": "F-2-3-3-2",
                "text": "Comprendre les émotions, les intentions et les sentiments qui animent les personnages."
            },
            {
                "id": "F-2-3-3-2-4",
                "parent": "F-2-3-3-2",
                "text": "Établir un lien entre la lecture effectuée et sa propre expérience"
            },
            {
                "id": "F-3",
                "parent": "FC1",
                "text": "Passer de l'oral à l'écrit : se préparer à apprendre à écrire"
            },
            {
                "id": "F-3-1",
                "parent": "F-3",
                "text": "Apprendre le geste d'écriture"
            },
            {
                "id": "F-3-1-1",
                "parent": "F-3-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-3-1-1-1",
                "parent": "F-3-1-1",
                "text": "Participer aux activités de motricité générale, de motricité fine et aux exercices de graphismes"
            },
            {
                "id": "F-3-1-1-2",
                "parent": "F-3-1-1",
                "text": "Guider son geste par le regard lorsqu'il trace ou écrit "
            },
            {
                "id": "F-3-1-1-3",
                "parent": "F-3-1-1",
                "text": "Prendre des repères spatiaux sur le support utilisé pour tracer."
            },
            {
                "id": "F-3-1-2",
                "parent": "F-3-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-1-2-1",
                "parent": "F-3-1-2",
                "text": "Adopter une posture adaptée au geste d'écriture"
            },
            {
                "id": "F-3-1-2-2",
                "parent": "F-3-1-2",
                "text": "Adopter une préhension correcte du stylo et s'entrainer à ne pas le lever en écrivant"
            },
            {
                "id": "F-3-1-2-3",
                "parent": "F-3-1-2",
                "text": "Utiliser de façon coordonnée les quatre articulations qui servent à tenir et guider le crayon (épaule, coude, poignet, doigts)."
            },
            {
                "id": "F-3-1-2-4",
                "parent": "F-3-1-2",
                "text": "Tracer des lettres capitales."
            },
            {
                "id": "F-3-1-2-5",
                "parent": "F-3-1-2",
                "text": "S'initier aux tracés de l'écriture cursive."
            },
            {
                "id": "F-3-1-3",
                "parent": "F-3-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-1-3-1",
                "parent": "F-3-1-3",
                "text": "Tenir correctement son stylo par la pince des doigts et utiliser de façon coordonnée les quatre articulations (épaule, coude, poignet, doigts)."
            },
            {
                "id": "F-3-1-3-2",
                "parent": "F-3-1-3",
                "text": "Travailler la ligature entre deux lettres."
            },
            {
                "id": "F-3-1-3-3",
                "parent": "F-3-1-3",
                "text": "Tracer des lettres en écriture cursive, les enchainer. "
            },
            {
                "id": "F-3-2",
                "parent": "F-3",
                "text": "Produire de premiers écrits"
            },
            {
                "id": "F-3-2-1",
                "parent": "F-3-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-3-2-1-1",
                "parent": "F-3-2-1",
                "text": "Passer de l'oral à l'écrit"
            },
            {
                "id": "F-3-2-1-1-1",
                "parent": "F-3-2-1-1",
                "text": "Percevoir que l'écrit encode l'oral."
            },
            {
                "id": "F-3-2-1-1-2",
                "parent": "F-3-2-1-1",
                "text": "Utiliser un support écrit connu."
            },
            {
                "id": "F-3-2-1-2",
                "parent": "F-3-2-1",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-1-2-1",
                "parent": "F-3-2-1-2",
                "text": "Mimer la posture et les gestes d'écriture de l'adulte lors de la production de traces qui s'apparentent à de l'écriture."
            },
            {
                "id": "F-3-2-1-2-2",
                "parent": "F-3-2-1-2",
                "text": "Tracer volontairement des signes abstraits dont on comprend qu'il ne s'agit pas de dessins, mais de lettres"
            },
            {
                "id": "F-3-2-2",
                "parent": "F-3-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-2-2-1",
                "parent": "F-3-2-2",
                "text": "Passer de l'oral à l'écrit"
            },
            {
                "id": "F-3-2-2-1-1",
                "parent": "F-3-2-2-1",
                "text": "Comprendre que lorsque l'adulte lit un même écrit plusieurs fois, ce qu'il lit est toujours identique."
            },
            {
                "id": "F-3-2-2-1-2",
                "parent": "F-3-2-2-1",
                "text": "Comprendre que l'écrit code des sons."
            },
            {
                "id": "F-3-2-2-1-3",
                "parent": "F-3-2-2-1",
                "text": "Proposer au professeur, lors d'une activité de dictée à l'adulte, le contenu d'un court message, stabiliser un énoncé oral et le mémoriser pour pouvoir ensuite le dicter au professeur."
            },
            {
                "id": "F-3-2-2-1-4",
                "parent": "F-3-2-2-1",
                "text": "Comparer la longueur d'un texte écrit et la durée du texte entendu."
            },
            {
                "id": "F-3-2-2-1-5",
                "parent": "F-3-2-2-1",
                "text": "Savoir que le sens de la lecture est de gauche à droite et de haut en bas."
            },
            {
                "id": "F-3-2-2-2",
                "parent": "F-3-2-2",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-2-2-1",
                "parent": "F-3-2-2-2",
                "text": "Chercher parmi les outils à sa disposition des modèles qui seront réutilisés dans un essai d'écriture."
            },
            {
                "id": "F-3-2-3",
                "parent": "F-3-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-2-3-1",
                "parent": "F-3-2-3",
                "text": "Passer de l'oral à l'écrit"
            },
            {
                "id": "F-3-2-3-1-1",
                "parent": "F-3-2-3-1",
                "text": "Segmenter l'oral en mots, les mots en syllabes, quelques syllabes en phonèmes."
            },
            {
                "id": "F-3-2-3-1-2",
                "parent": "F-3-2-3-1",
                "text": "Comprendre que l'écrit encode l'oral et que les sons de la langue sont codés par des lettres."
            },
            {
                "id": "F-3-2-3-1-3",
                "parent": "F-3-2-3-1",
                "text": "Suivre la trace écrite des yeux lors d'une relecture par l'adulte d'un message produit lors d'une dictée à l'adulte."
            },
            {
                "id": "F-3-2-3-2",
                "parent": "F-3-2-3",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-3-2-1",
                "parent": "F-3-2-3-2",
                "text": "Mémoriser la graphie d'un mot transparent, en s'appuyant sur la connaissance des lettres et la conscience phonologique et le retranscrire sur un support."
            },
            {
                "id": "F-3-2-3-2-2",
                "parent": "F-3-2-3-2",
                "text": "Réinvestir ses premières connaissances relatives au principe alphabétique pour produire un écrit."
            },
            {
                "id": "F-3-2-3-2-3",
                "parent": "F-3-2-3-2",
                "text": "Se repérer dans l'alphabet pour retrouver l'écriture d'une lettre nécessaire pour produire un écrit."
            },
            {
                "id": "F-3-2-3-2-4",
                "parent": "F-3-2-3-2",
                "text": "Mémoriser l'écriture de mots transparents ou de syllabes connues pour les réutiliser dans une production d'écrit."
            },
            {
                "id": "F-3-2-3-2-5",
                "parent": "F-3-2-3-2",
                "text": "Comprendre qu'il existe une norme pour écrire : ponctuation, majuscules, mise en page, etc."
            },
            {
                "id": "F-3-2-3-2-6",
                "parent": "F-3-2-3-2",
                "text": "Persévérer pour mener la production d'écrit à son terme : préparation, énonciation et révision"
            },
            {
                "id": "MC2",
                "parent": "M",
                "text": "Cycle 2"
            },
            {
                "id": "MC2-0",
                "parent": "MC2",
                "text": "Nombres, calcul et résolution de problèmes"
            },
            {
                "id": "MC2-1",
                "parent": "MC2-0",
                "text": "Cours préparatoire"
            },
            {
                "id": "MC2-2",
                "parent": "MC2-1",
                "text": "Les nombres entiers"
            },
            {
                "id": "MC2-3",
                "parent": "MC2-2",
                "text": "Comparer et dénombrer des collections en les organisant."
            },
            {
                "id": "MC2-4",
                "parent": "MC2-2",
                "text": "Construire des collections de cardinal donné."
            },
            {
                "id": "MC2-5",
                "parent": "MC2-2",
                "text": "Connaitre la suite écrite et la suite orale des nombres jusqu'à cent."
            },
            {
                "id": "MC2-6",
                "parent": "MC2-2",
                "text": "Connaitre et utiliser diverses représentations d'un nombre et passer de l'une à l'autre."
            },
            {
                "id": "MC2-7",
                "parent": "MC2-2",
                "text": "Connaitre la valeur des chiffres en fonction de leur position (unités, dizaines)."
            },
            {
                "id": "MC2-8",
                "parent": "MC2-2",
                "text": "Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles =, < et >."
            },
            {
                "id": "MC2-9",
                "parent": "MC2-2",
                "text": "Ordonner des nombres dans l'ordre croissant ou décroissant."
            },
            {
                "id": "MC2-10",
                "parent": "MC2-2",
                "text": "Savoir placer des nombres sur une demi-droite graduée de un en un."
            },
            {
                "id": "MC2-11",
                "parent": "MC2-2",
                "text": "Connaitre les nombres ordinaux jusqu'à « vingtième »."
            },
            {
                "id": "MC2-12",
                "parent": "MC2-2",
                "text": "Comprendre et utiliser les nombres ordinaux."
            },
            {
                "id": "MC2-13",
                "parent": "MC2-2",
                "text": "Repérer un rang ou une position dans une file orientée ou dans une liste d'objets ou de personnes."
            },
            {
                "id": "MC2-14",
                "parent": "MC2-2",
                "text": "Faire le lien entre le rang d'un objet dans une liste et le nombre d'éléments qui le précèdent."
            },
            {
                "id": "MC2-15",
                "parent": "MC2-2",
                "text": "Utiliser les nombres ordinaux dans le cadre de l'étude de suites de symboles, de formes, de lettres ou de nombres."
            },
            {
                "id": "MC2-16",
                "parent": "MC2-1",
                "text": "Les quatre opérations"
            },
            {
                "id": "MC2-17",
                "parent": "MC2-16",
                "text": "Comprendre le sens de l'addition et de la soustraction."
            },
            {
                "id": "MC2-18",
                "parent": "MC2-16",
                "text": "Comprendre et utiliser les symboles « + », « - » et « = »."
            },
            {
                "id": "MC2-19",
                "parent": "MC2-16",
                "text": "Poser et effectuer des additions en colonnes."
            },
            {
                "id": "MC2-20",
                "parent": "MC2-16",
                "text": "Comprendre le sens de la multiplication."
            },
            {
                "id": "MC2-21",
                "parent": "MC2-1",
                "text": "Le calcul mental"
            },
            {
                "id": "MC2-22",
                "parent": "MC2-21",
                "text": "Mémoriser des faits numériques"
            },
            {
                "id": "MC2-23",
                "parent": "MC2-22",
                "text": "Connaitre dans les deux sens les tables d'addition."
            },
            {
                "id": "MC2-24",
                "parent": "MC2-22",
                "text": "Connaitre les doubles et les moitiés de nombres usuels."
            },
            {
                "id": "MC2-25",
                "parent": "MC2-21",
                "text": "Utiliser ses connaissances en numération pour calculer mentalement"
            },
            {
                "id": "MC2-26",
                "parent": "MC2-25",
                "text": "Ajouter ou soustraire 1 ou 2 à un nombre."
            },
            {
                "id": "MC2-27",
                "parent": "MC2-25",
                "text": "Ajouter ou soustraire 10 à un nombre."
            },
            {
                "id": "MC2-28",
                "parent": "MC2-25",
                "text": "Ajouter ou soustraire 20, 30, 40, 50, 60, 70, 80 ou 90 à un nombre."
            },
            {
                "id": "MC2-29",
                "parent": "MC2-21",
                "text": "Apprendre des procédures de calcul mental"
            },
            {
                "id": "MC2-30",
                "parent": "MC2-29",
                "text": "Trouver le complément d'un nombre à la dizaine supérieure."
            },
            {
                "id": "MC2-31",
                "parent": "MC2-29",
                "text": "Ajouter un nombre inférieur à 9 à un nombre."
            },
            {
                "id": "MC2-32",
                "parent": "MC2-29",
                "text": "Ajouter 9 à un nombre."
            },
            {
                "id": "MC2-33",
                "parent": "MC2-29",
                "text": "Ajouter deux nombres inférieurs à 100."
            },
            {
                "id": "MC2-34",
                "parent": "MC2-29",
                "text": "Déterminer la moitié d'un nombre pair."
            },
            {
                "id": "MC2-35",
                "parent": "MC2-29",
                "text": "Soustraire un nombre inférieur à 10 à un nombre entier de dizaines."
            },
            {
                "id": "MC2-36",
                "parent": "MC2-1",
                "text": "La résolution de problèmes"
            },
            {
                "id": "MC2-37",
                "parent": "MC2-36",
                "text": "Résoudre des problèmes additifs en une étape du type parties-tout."
            },
            {
                "id": "MC2-38",
                "parent": "MC2-36",
                "text": "Résoudre des problèmes additifs en deux étapes (champ numérique inférieur ou égal à 30)."
            },
            {
                "id": "MC2-39",
                "parent": "MC2-36",
                "text": "Résoudre des problèmes multiplicatifs en une étape (champ numérique inférieur ou égal à 30)."
            },
            {
                "id": "MC2-40",
                "parent": "MC2-0",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "MC2-41",
                "parent": "MC2-40",
                "text": "Les nombres entiers"
            },
            {
                "id": "MC2-42",
                "parent": "MC2-41",
                "text": "Dénombrer des collections en les organisant."
            },
            {
                "id": "MC2-43",
                "parent": "MC2-42",
                "text": "Construire des collections de cardinal donné."
            },
            {
                "id": "MC2-44",
                "parent": "MC2-42",
                "text": "Connaitre et utiliser la relation entre unités et dizaines, entre dizaines et centaines, entre unités et centaines."
            },
            {
                "id": "MC2-45",
                "parent": "MC2-42",
                "text": "Connaitre la suite écrite et la suite orale des nombres jusqu'à mille."
            },
            {
                "id": "MC2-46",
                "parent": "MC2-42",
                "text": "Connaitre et utiliser diverses représentations d'un nombre et passer de l'une à l'autre."
            },
            {
                "id": "MC2-47",
                "parent": "MC2-42",
                "text": "Connaitre la valeur des chiffres en fonction de leur position dans un nombre."
            },
            {
                "id": "MC2-48",
                "parent": "MC2-42",
                "text": "Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles (=, <, >)."
            },
            {
                "id": "MC2-49",
                "parent": "MC2-42",
                "text": "Ordonner des nombres dans l'ordre croissant ou décroissant."
            },
            {
                "id": "MC2-50",
                "parent": "MC2-42",
                "text": "Comprendre et savoir utiliser les expressions « égal à », « supérieur à », « inférieur à », « compris entre … et … »."
            },
            {
                "id": "MC2-51",
                "parent": "MC2-42",
                "text": "Savoir placer des nombres sur une demi-droite graduée."
            },
            {
                "id": "MC2-52",
                "parent": "MC2-42",
                "text": "Connaitre les nombres ordinaux jusqu'à cent."
            },
            {
                "id": "MC2-53",
                "parent": "MC2-42",
                "text": "Comprendre et utiliser les nombres ordinaux."
            },
            {
                "id": "MC2-54",
                "parent": "MC2-42",
                "text": "Repérer un rang ou une position dans une file orientée ou dans une liste d'objets ou de personnes."
            },
            {
                "id": "MC2-55",
                "parent": "MC2-42",
                "text": "Faire le lien entre le rang d'un objet dans une liste et le nombre d'éléments qui le précèdent."
            },
            {
                "id": "MC2-56",
                "parent": "MC2-42",
                "text": "Utiliser les nombres ordinaux dans le cadre de suite de symboles, de lettres ou de nombres."
            },
            {
                "id": "MC2-57",
                "parent": "MC2-40",
                "text": "Les fractions"
            },
            {
                "id": "MC2-58",
                "parent": "MC2-42",
                "text": "Savoir interpréter, représenter, écrire et lire les fractions 1/2 , 1/3 , 1/4 , 1/5 , 1/6 , 1/8 et 1/10."
            },
            {
                "id": "MC2-59",
                "parent": "MC2-42",
                "text": "Savoir interpréter, représenter, écrire et lire des fractions inférieures ou égales à 1."
            },
            {
                "id": "MC2-60",
                "parent": "MC2-42",
                "text": "Connaitre et utiliser les mots « dénominateur » et « numérateur »."
            },
            {
                "id": "MC2-61",
                "parent": "MC2-42",
                "text": "Comparer des fractions ayant le même dénominateur."
            },
            {
                "id": "MC2-62",
                "parent": "MC2-42",
                "text": "Comparer des fractions dont le numérateur est 1."
            },
            {
                "id": "MC2-63",
                "parent": "MC2-42",
                "text": "Additionner et soustraire des fractions de même dénominateur."
            },
            {
                "id": "MC2-64",
                "parent": "MC2-40",
                "text": "Les quatre opérations"
            },
            {
                "id": "MC2-65",
                "parent": "MC2-42",
                "text": "Poser et effectuer des additions et des soustractions en colonnes."
            },
            {
                "id": "MC2-66",
                "parent": "MC2-42",
                "text": "Comprendre et utiliser le symbole « × »."
            },
            {
                "id": "MC2-67",
                "parent": "MC2-42",
                "text": "Comprendre et savoir que la multiplication est commutative."
            },
            {
                "id": "MC2-68",
                "parent": "MC2-42",
                "text": "Connaitre la notion de parité d'un nombre."
            },
            {
                "id": "MC2-69",
                "parent": "MC2-40",
                "text": "Le calcul mental"
            },
            {
                "id": "MC2-70",
                "parent": "MC2-69",
                "text": "Mémoriser des faits numériques"
            },
            {
                "id": "MC2-71",
                "parent": "MC2-70",
                "text": "Connaitre dans les deux sens les tables d'addition."
            },
            {
                "id": "MC2-72",
                "parent": "MC2-70",
                "text": "Connaitre dans les deux sens les tables de multiplication."
            },
            {
                "id": "MC2-73",
                "parent": "MC2-70",
                "text": "Connaitre des faits multiplicatifs usuels."
            },
            {
                "id": "MC2-74",
                "parent": "MC2-69",
                "text": "Utiliser ses connaissances en numération pour calculer mentalement"
            },
            {
                "id": "MC2-75",
                "parent": "MC2-74",
                "text": "Ajouter ou soustraire un nombre entier de dizaines à un nombre. "
            },
            {
                "id": "MC2-76",
                "parent": "MC2-74",
                "text": "Ajouter ou soustraire un nombre entier de centaines à un nombre."
            },
            {
                "id": "MC2-77",
                "parent": "MC2-74",
                "text": "Multiplier par 10 un nombre inférieur à 100."
            },
            {
                "id": "MC2-78",
                "parent": "MC2-69",
                "text": "Apprendre des procédures de calcul mental"
            },
            {
                "id": "MC2-79",
                "parent": "MC2-78",
                "text": "Ajouter 9, 19 ou 29 à un nombre."
            },
            {
                "id": "MC2-80",
                "parent": "MC2-78",
                "text": "Soustraire 9 à un nombre."
            },
            {
                "id": "MC2-81",
                "parent": "MC2-78",
                "text": "Soustraire un nombre inférieur à 9 à un nombre."
            },
            {
                "id": "MC2-82",
                "parent": "MC2-78",
                "text": "Déterminer la moitié d'un nombre pair."
            },
            {
                "id": "MC2-83",
                "parent": "MC2-78",
                "text": "Calculer le produit d'un nombre compris entre 11 et 19 par un nombre inférieur à 10 en décomposant le plus grand des deux facteurs en la somme de deux nombres (propriété de distributivité de la multiplication par rapport à l'addition)."
            },
            {
                "id": "MC2-84",
                "parent": "MC2-40",
                "text": "La résolution de problèmes"
            },
            {
                "id": "MC2-85",
                "parent": "MC2-84",
                "text": "Résoudre des problèmes additifs en une étape de type parties-tout."
            },
            {
                "id": "MC2-86",
                "parent": "MC2-84",
                "text": "Résoudre des problèmes additifs de comparaison en une étape."
            },
            {
                "id": "MC2-87",
                "parent": "MC2-84",
                "text": "Résoudre des problèmes additifs en deux étapes."
            },
            {
                "id": "MC2-88",
                "parent": "MC2-84",
                "text": "Résoudre des problèmes multiplicatifs en une étape."
            },
            {
                "id": "MC2-89",
                "parent": "MC2-84",
                "text": "Résoudre des problèmes mixtes en deux étapes (une étape additive et une étape multiplicative)."
            },
            {
                "id": "MC2-90",
                "parent": "MC2-0",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "MC2-91",
                "parent": "MC2-90",
                "text": "Les nombres entiers"
            },
            {
                "id": "MC2-92",
                "parent": "MC2-91",
                "text": "Dénombrer des collections."
            },
            {
                "id": "MC2-93",
                "parent": "MC2-91",
                "text": "Construire des collections de cardinal donné."
            },
            {
                "id": "MC2-94",
                "parent": "MC2-91",
                "text": "Connaitre et utiliser les relations entre les unités de numération."
            },
            {
                "id": "MC2-95",
                "parent": "MC2-91",
                "text": "Connaitre la suite écrite et la suite orale des nombres jusqu'à dix-mille."
            },
            {
                "id": "MC2-96",
                "parent": "MC2-91",
                "text": "Connaitre et utiliser diverses représentations d'un nombre et passer de l'une à l'autre."
            },
            {
                "id": "MC2-97",
                "parent": "MC2-91",
                "text": "Connaitre la valeur des chiffres en fonction de leur position dans un nombre."
            },
            {
                "id": "MC2-98",
                "parent": "MC2-91",
                "text": "Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles (=, <, >)."
            },
            {
                "id": "MC2-99",
                "parent": "MC2-91",
                "text": "Ordonner des nombres dans l'ordre croissant ou décroissant."
            },
            {
                "id": "MC2-100",
                "parent": "MC2-91",
                "text": "Comprendre et savoir utiliser les expressions « égal à », « supérieur à », « inférieur à », « compris entre … et … »."
            },
            {
                "id": "MC2-101",
                "parent": "MC2-91",
                "text": "Savoir placer des nombres sur une demi-droite graduée."
            },
            {
                "id": "MC2-102",
                "parent": "MC2-90",
                "text": "Les fractions"
            },
            {
                "id": "MC2-103",
                "parent": "MC2-102",
                "text": "Savoir établir des égalités de fractions inférieures ou égales à 1."
            },
            {
                "id": "MC2-104",
                "parent": "MC2-102",
                "text": "Partager une unité de longueur en fractions d'unité et mesurer des longueurs non entières par rapport à cette unité."
            },
            {
                "id": "MC2-105",
                "parent": "MC2-102",
                "text": "Comparer des fractions inférieures à 1."
            },
            {
                "id": "MC2-106",
                "parent": "MC2-102",
                "text": "Additionner et soustraire des fractions."
            },
            {
                "id": "MC2-107",
                "parent": "MC2-90",
                "text": "Les quatre opérations"
            },
            {
                "id": "MC2-108",
                "parent": "MC2-107",
                "text": "Comprendre et utiliser les mots « terme », « somme » et « différence »."
            },
            {
                "id": "MC2-109",
                "parent": "MC2-107",
                "text": "Poser et effectuer des additions et des soustractions en colonnes."
            },
            {
                "id": "MC2-110",
                "parent": "MC2-107",
                "text": "Comprendre et utiliser les mots « facteur », « produit » et « multiple »."
            },
            {
                "id": "MC2-111",
                "parent": "MC2-107",
                "text": "Comprendre le sens de la division et utiliser le symbole « ÷ »."
            },
            {
                "id": "MC2-112",
                "parent": "MC2-107",
                "text": "Poser et effectuer des multiplications d'un nombre à deux ou trois chiffres par un nombre à un ou deux chiffres."
            },
            {
                "id": "MC2-113",
                "parent": "MC2-90",
                "text": "Le calcul mental"
            },
            {
                "id": "MC2-114",
                "parent": "MC2-113",
                "text": "Mémoriser des faits numériques"
            },
            {
                "id": "MC2-115",
                "parent": "MC2-114",
                "text": "Connaitre dans les deux sens les tables d'addition."
            },
            {
                "id": "MC2-116",
                "parent": "MC2-114",
                "text": "Connaitre dans les deux sens les tables de multiplication"
            },
            {
                "id": "MC2-117",
                "parent": "MC2-114",
                "text": "Connaitre des faits multiplicatifs usuels."
            },
            {
                "id": "MC2-118",
                "parent": "MC2-113",
                "text": "Utiliser ses connaissances en numération pour calculer mentalement"
            },
            {
                "id": "MC2-119",
                "parent": "MC2-118",
                "text": "Multiplier un nombre entier par 10 ou 100."
            },
            {
                "id": "MC2-120",
                "parent": "MC2-113",
                "text": "Apprendre des procédures de calcul mental"
            },
            {
                "id": "MC2-121",
                "parent": "MC2-120",
                "text": "Ajouter 8, 9, 18, 19, 28, 29, 38 ou 39 à un nombre."
            },
            {
                "id": "MC2-122",
                "parent": "MC2-120",
                "text": "Soustraire 9, 19, 29 ou 39 à un autre nombre."
            },
            {
                "id": "MC2-123",
                "parent": "MC2-120",
                "text": "Multiplier un nombre entier par 4 ou par 8."
            },
            {
                "id": "MC2-124",
                "parent": "MC2-120",
                "text": "Multiplier un nombre inférieur à 10 par un nombre entier de dizaines."
            },
            {
                "id": "MC2-125",
                "parent": "MC2-120",
                "text": "Calculer le produit d'un nombre compris entre 11 et 99 par un nombre inférieur à 10 en décomposant le plus grand des deux facteurs en la somme de deux nombres (propriété de distributivité de la multiplication par rapport à l'addition)."
            },
            {
                "id": "MC2-126",
                "parent": "MC2-90",
                "text": "La résolution de problèmes"
            },
            {
                "id": "MC2-127",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes additifs en une étape de types parties-tout et comparaison."
            },
            {
                "id": "MC2-128",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes additifs en deux étapes."
            },
            {
                "id": "MC2-129",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes multiplicatifs en une étape."
            },
            {
                "id": "MC2-130",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes mixtes en deux ou trois étapes."
            },
            {
                "id": "MC2-131",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes de comparaison multiplicative en une étape."
            },
            {
                "id": "MC2-132",
                "parent": "MC2-126",
                "text": "Résoudre des problèmes mettant en jeu des produits cartésiens."
            },
            {
                "id": "MC2-133",
                "parent": "MC2",
                "text": "Grandeurs et mesures"
            },
            {
                "id": "MC2-134",
                "parent": "MC2-133",
                "text": "Cours préparatoire"
            },
            {
                "id": "MC2-135",
                "parent": "MC2-134",
                "text": "Les longueurs et les masses"
            },
            {
                "id": "MC2-136",
                "parent": "MC2-135",
                "text": "Les longueurs"
            },
            {
                "id": "MC2-137",
                "parent": "MC2-136",
                "text": "Utiliser le lexique spécifique associé aux longueurs."
            },
            {
                "id": "MC2-138",
                "parent": "MC2-136",
                "text": "Comparer des objets selon leur longueur."
            },
            {
                "id": "MC2-139",
                "parent": "MC2-136",
                "text": "Comparer des segments selon leur longueur."
            },
            {
                "id": "MC2-140",
                "parent": "MC2-136",
                "text": "Savoir mesurer la longueur d'un segment en utilisant une règle graduée."
            },
            {
                "id": "MC2-141",
                "parent": "MC2-136",
                "text": "Connaitre et utiliser les unités mètre et centimètre et les symboles associés (m et cm)."
            },
            {
                "id": "MC2-142",
                "parent": "MC2-136",
                "text": "Connaitre quelques longueurs de référence."
            },
            {
                "id": "MC2-143",
                "parent": "MC2-136",
                "text": "Savoir qu'un mètre est égal à cent centimètres."
            },
            {
                "id": "MC2-144",
                "parent": "MC2-135",
                "text": "Les masses"
            },
            {
                "id": "MC2-145",
                "parent": "MC2-144",
                "text": "Utiliser le lexique associé aux masses."
            },
            {
                "id": "MC2-146",
                "parent": "MC2-144",
                "text": "Comparer des objets selon leur masse."
            },
            {
                "id": "MC2-147",
                "parent": "MC2-135",
                "text": "La monnaie"
            },
            {
                "id": "MC2-148",
                "parent": "MC2-147",
                "text": "Utiliser le lexique spécifique lié à la monnaie."
            },
            {
                "id": "MC2-149",
                "parent": "MC2-147",
                "text": "Comparer les valeurs de deux ensembles constitués de pièces de monnaie ou de deux ensembles constitués de pièces et de billets."
            },
            {
                "id": "MC2-150",
                "parent": "MC2-147",
                "text": "Déterminer la valeur en euro d'un ensemble constitué de pièces et de billets."
            },
            {
                "id": "MC2-151",
                "parent": "MC2-147",
                "text": "Constituer une somme d'argent donnée avec des pièces et des billets."
            },
            {
                "id": "MC2-152",
                "parent": "MC2-147",
                "text": "Simuler des achats en manipulant des pièces et des billets fictifs. Rendre la monnaie."
            },
            {
                "id": "MC2-153",
                "parent": "MC2-135",
                "text": "Le repérage dans le temps"
            },
            {
                "id": "MC2-154",
                "parent": "MC2-153",
                "text": "Lire sur une horloge à aiguilles une heure donnée en heures entières."
            },
            {
                "id": "MC2-155",
                "parent": "MC2-153",
                "text": "Positionner les aiguilles d'une horloge correspondant à une heure donnée (uniquement des heures entières inférieures ou égales à douze)."
            },
            {
                "id": "MC2-156",
                "parent": "MC2-153",
                "text": "Associer une heure à un moment de la journée."
            },
            {
                "id": "MC2-157",
                "parent": "MC2-133",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "MC2-158",
                "parent": "MC2-157",
                "text": "Les longueurs et les masses"
            },
            {
                "id": "MC2-159",
                "parent": "MC2-158",
                "text": "Les longueurs"
            },
            {
                "id": "MC2-160",
                "parent": "MC2-159",
                "text": "Connaitre et utiliser les unités mètre, centimètre, kilomètre et les symboles associés (m, cm et km)."
            },
            {
                "id": "MC2-161",
                "parent": "MC2-159",
                "text": "Choisir l'unité la mieux adaptée pour exprimer une longueur."
            },
            {
                "id": "MC2-162",
                "parent": "MC2-159",
                "text": "Connaitre les relations entre les unités de longueur usuelles."
            },
            {
                "id": "MC2-163",
                "parent": "MC2-159",
                "text": "Savoir mesurer la longueur d'un segment en utilisant une règle graduée."
            },
            {
                "id": "MC2-164",
                "parent": "MC2-159",
                "text": "Comparer des longueurs."
            },
            {
                "id": "MC2-165",
                "parent": "MC2-159",
                "text": "Connaitre quelques longueurs de référence."
            },
            {
                "id": "MC2-166",
                "parent": "MC2-159",
                "text": "Estimer la longueur d'un objet du quotidien."
            },
            {
                "id": "MC2-167",
                "parent": "MC2-157",
                "text": "Les masses"
            },
            {
                "id": "MC2-168",
                "parent": "MC2-167",
                "text": "Savoir identifier l'objet le plus léger (ou le plus lourd) parmi deux ou trois objets de volumes proches en les soupesant ou en utilisant une balance pour les peser."
            },
            {
                "id": "MC2-169",
                "parent": "MC2-167",
                "text": "Connaitre et utiliser les unités gramme et kilogramme et les symboles associés (g, kg)."
            },
            {
                "id": "MC2-170",
                "parent": "MC2-167",
                "text": "Savoir que 1 kg est égal à 1 000 g."
            },
            {
                "id": "MC2-171",
                "parent": "MC2-167",
                "text": "Comparer des masses."
            },
            {
                "id": "MC2-172",
                "parent": "MC2-167",
                "text": "Disposer de quelques masses de référence. Estimer la masse d'objets du quotidien en gramme ou en kilogramme."
            },
            {
                "id": "MC2-173",
                "parent": "MC2-157",
                "text": "La monnaie"
            },
            {
                "id": "MC2-174",
                "parent": "MC2-173",
                "text": "Connaitre le lien entre les euros et les centimes."
            },
            {
                "id": "MC2-175",
                "parent": "MC2-174",
                "text": "Comparer les valeurs en euro de deux ensembles constitués de pièces et de billets."
            },
            {
                "id": "MC2-176",
                "parent": "MC2-174",
                "text": "Déterminer la valeur en euro et centime d'euro d'un ensemble constitué de pièces et de billets."
            },
            {
                "id": "MC2-177",
                "parent": "MC2-174",
                "text": "Constituer avec des euros et des centimes d'euro une somme d'argent d'une valeur donnée."
            },
            {
                "id": "MC2-178",
                "parent": "MC2-174",
                "text": "Simuler des achats en manipulant des pièces et des billets fictifs. Rendre la monnaie."
            },
            {
                "id": "MC2-179",
                "parent": "MC2-174",
                "text": "Connaitre le sens de l'écriture à virgule d'une somme d'argent."
            },
            {
                "id": "MC2-180",
                "parent": "MC2-157",
                "text": "Le repérage dans le temps et les durées"
            },
            {
                "id": "MC2-181",
                "parent": "MC2-180",
                "text": "Lire l'heure sur une horloge à aiguilles (lorsque l'heure est donnée en heures entières, en heures et demi-heure ou en heures et quarts d'heure)."
            },
            {
                "id": "MC2-182",
                "parent": "MC2-180",
                "text": "Positionner les aiguilles d'une horloge correspondant à une heure donnée en heures entières, en heures et demi-heure ou en heures et quart d'heure."
            },
            {
                "id": "MC2-183",
                "parent": "MC2-180",
                "text": "Connaitre, utiliser et distinguer les heures du matin et celles de l'après-midi."
            },
            {
                "id": "MC2-184",
                "parent": "MC2-180",
                "text": "Connaitre les unités de mesure de durée, heure et minute, et les symboles associés (h et min)."
            },
            {
                "id": "MC2-185",
                "parent": "MC2-180",
                "text": "Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (pour des intervalles de temps situés dans une même journée, avec des heures données en heures entières, en heures et demi-heure ou en heures et quarts d'heure)."
            },
            {
                "id": "MC2-186",
                "parent": "MC2-133",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "MC2-187",
                "parent": "MC2-186",
                "text": "Les longueurs, les masses et les contenances"
            },
            {
                "id": "MC2-188",
                "parent": "MC2-187",
                "text": "Les longueurs"
            },
            {
                "id": "MC2-189",
                "parent": "MC2-188",
                "text": "Connaitre et utiliser les unités mètre, décimètre, centimètre, millimètre, kilomètre et les symboles associés (m, dm, cm, mm, km)."
            },
            {
                "id": "MC2-190",
                "parent": "MC2-188",
                "text": "Connaitre les relations entre les unités de longueur."
            },
            {
                "id": "MC2-191",
                "parent": "MC2-188",
                "text": "Choisir l'unité la mieux adaptée pour exprimer une longueur."
            },
            {
                "id": "MC2-192",
                "parent": "MC2-188",
                "text": "Comparer des longueurs."
            },
            {
                "id": "MC2-193",
                "parent": "MC2-188",
                "text": "Tracer un segment de longueur donnée."
            },
            {
                "id": "MC2-194",
                "parent": "MC2-188",
                "text": "Disposer de quelques longueurs de référence."
            },
            {
                "id": "MC2-195",
                "parent": "MC2-188",
                "text": "Estimer la longueur d'un objet ou une distance."
            },
            {
                "id": "MC2-196",
                "parent": "MC2-188",
                "text": "Savoir ce qu'est le périmètre d'une figure plane."
            },
            {
                "id": "MC2-197",
                "parent": "MC2-188",
                "text": "Comparer le périmètre de plusieurs polygones sans règle graduée, en utilisant un compas."
            },
            {
                "id": "MC2-198",
                "parent": "MC2-188",
                "text": "Déterminer le périmètre d'un polygone en utilisant une règle graduée."
            },
            {
                "id": "MC2-199",
                "parent": "MC2-187",
                "text": "Les masses"
            },
            {
                "id": "MC2-200",
                "parent": "MC2-199",
                "text": "Connaitre et utiliser les unités gramme, kilogramme et tonne et les symboles associés (g, kg, t)."
            },
            {
                "id": "MC2-201",
                "parent": "MC2-199",
                "text": "Choisir l'unité la mieux adaptée pour exprimer une masse."
            },
            {
                "id": "MC2-202",
                "parent": "MC2-199",
                "text": "Connaitre les relations entre les unités de masse usuelles."
            },
            {
                "id": "MC2-203",
                "parent": "MC2-199",
                "text": "Comparer des masses."
            },
            {
                "id": "MC2-204",
                "parent": "MC2-199",
                "text": "Disposer de quelques masses de référence."
            },
            {
                "id": "MC2-205",
                "parent": "MC2-199",
                "text": "Estimer la masse d'un objet."
            },
            {
                "id": "MC2-206",
                "parent": "MC2-187",
                "text": "Les contenances"
            },
            {
                "id": "MC2-207",
                "parent": "MC2-206",
                "text": "Comparer les contenances de différents objets."
            },
            {
                "id": "MC2-208",
                "parent": "MC2-206",
                "text": "Connaitre et utiliser les unités litre, décilitre et centilitre et les symboles associés (L, dL et cL)."
            },
            {
                "id": "MC2-209",
                "parent": "MC2-206",
                "text": "Savoir que 1 L est égal à 10 dL et également à 100 cL."
            },
            {
                "id": "MC2-210",
                "parent": "MC2-187",
                "text": "La monnaie"
            },
            {
                "id": "MC2-211",
                "parent": "MC2-210",
                "text": "Simuler des achats en manipulant des pièces et des billets fictifs. Rendre la monnaie."
            },
            {
                "id": "MC2-212",
                "parent": "MC2-210",
                "text": "Poser et effectuer des additions de montants en euro."
            },
            {
                "id": "MC2-213",
                "parent": "MC2-210",
                "text": "Poser et effectuer des soustractions de montants en euro."
            },
            {
                "id": "MC2-214",
                "parent": "MC2-187",
                "text": "Le repérage dans le temps et les durées"
            },
            {
                "id": "MC2-215",
                "parent": "MC2-214",
                "text": "Lire l'heure sur une horloge à aiguilles."
            },
            {
                "id": "MC2-216",
                "parent": "MC2-214",
                "text": "Positionner les aiguilles d'une horloge correspondant à une heure donnée en heures entières ou en heures et minutes."
            },
            {
                "id": "MC2-217",
                "parent": "MC2-214",
                "text": "Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (pour des intervalles de temps situés dans une même journée)."
            },
            {
                "id": "MC2-218",
                "parent": "MC2-214",
                "text": "Résoudre des problèmes à une ou deux étapes impliquant des durées."
            },
            {
                "id": "MC2-219",
                "parent": "MC2",
                "text": "Espace et géométrie"
            },
            {
                "id": "MC2-220",
                "parent": "MC2-219",
                "text": "Cours préparatoire"
            },
            {
                "id": "MC2-221",
                "parent": "MC2-220",
                "text": "Les solides"
            },
            {
                "id": "MC2-222",
                "parent": "MC2-221",
                "text": "Reconnaitre les solides usuels suivants : cube, boule, cône, cylindre, pavé."
            },
            {
                "id": "MC2-223",
                "parent": "MC2-221",
                "text": "Nommer un cube, un pavé et une boule."
            },
            {
                "id": "MC2-224",
                "parent": "MC2-221",
                "text": "Décrire un cube ou un pavé en utilisant le terme « face ». Connaitre le nombre et la nature des faces d'un cube et d'un pavé."
            },
            {
                "id": "MC2-225",
                "parent": "MC2-221",
                "text": "Construire des cubes et des pavés."
            },
            {
                "id": "MC2-226",
                "parent": "MC2-220",
                "text": "La géométrie plane"
            },
            {
                "id": "MC2-227",
                "parent": "MC2-226",
                "text": "Reconnaitre des formes planes (disque, carré, rectangle et triangle) dans un assemblage et dans son environnement proche."
            },
            {
                "id": "MC2-228",
                "parent": "MC2-226",
                "text": "Nommer le disque, le carré, le rectangle et le triangle."
            },
            {
                "id": "MC2-229",
                "parent": "MC2-226",
                "text": "Donner une première description du carré, du rectangle, du triangle en utilisant les termes « sommet » et « côté »."
            },
            {
                "id": "MC2-230",
                "parent": "MC2-226",
                "text": "Repérer visuellement des alignements."
            },
            {
                "id": "MC2-231",
                "parent": "MC2-226",
                "text": "Utiliser la règle pour repérer ou vérifier des alignements."
            },
            {
                "id": "MC2-232",
                "parent": "MC2-226",
                "text": "Utiliser la règle comme instrument de tracé."
            },
            {
                "id": "MC2-233",
                "parent": "MC2-226",
                "text": "Construire un carré, un rectangle, un triangle ou un assemblage de ces figures sur du papier quadrillé ou pointé."
            },
            {
                "id": "MC2-234",
                "parent": "MC2-220",
                "text": "Le repérage dans l'espace"
            },
            {
                "id": "MC2-235",
                "parent": "MC2-234",
                "text": "Connaitre et utiliser le vocabulaire lié aux positions relatives."
            },
            {
                "id": "MC2-236",
                "parent": "MC2-234",
                "text": "Situer des personnes ou des objets les uns par rapport aux autres ou par rapport à d'autres repères dans la classe."
            },
            {
                "id": "MC2-237",
                "parent": "MC2-234",
                "text": "Construire et utiliser des représentations de la classe pour localiser, mémoriser et communiquer un emplacement."
            },
            {
                "id": "MC2-238",
                "parent": "MC2-234",
                "text": "Construire et reproduire des assemblages de solides à partir d'un modèle en trois dimensions ou de représentations planes."
            },
            {
                "id": "MC2-239",
                "parent": "MC2-234",
                "text": "Se déplacer et décrire des déplacements dans la classe en s'orientant et en utilisant des repères."
            },
            {
                "id": "MC2-240",
                "parent": "MC2-234",
                "text": "Construire et utiliser un plan de la classe pour communiquer un déplacement."
            },
            {
                "id": "MC2-241",
                "parent": "MC2-234",
                "text": "Utiliser et produire une suite d'instructions qui codent un déplacement en utilisant un vocabulaire spatial précis."
            },
            {
                "id": "MC2-242",
                "parent": "MC2-219",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "MC2-243",
                "parent": "MC2-242",
                "text": "Les solides"
            },
            {
                "id": "MC2-244",
                "parent": "MC2-243",
                "text": "Reconnaitre les solides usuels suivants : cube, boule, cône, pyramide, cylindre, pavé."
            },
            {
                "id": "MC2-245",
                "parent": "MC2-243",
                "text": "Nommer un cube, une boule, un pavé, un cône ou une pyramide."
            },
            {
                "id": "MC2-246",
                "parent": "MC2-243",
                "text": "Décrire un cube, un pavé ou une pyramide en utilisant les termes « face », « sommet » et « arête »."
            },
            {
                "id": "MC2-247",
                "parent": "MC2-243",
                "text": "Connaitre le nombre et la nature des faces d'un cube ou d'un pavé."
            },
            {
                "id": "MC2-248",
                "parent": "MC2-243",
                "text": "Construire un cube, un pavé droit ou une pyramide."
            },
            {
                "id": "MC2-249",
                "parent": "MC2-242",
                "text": "La géométrie plane"
            },
            {
                "id": "MC2-250",
                "parent": "MC2-249",
                "text": "Utiliser le vocabulaire géométrique approprié."
            },
            {
                "id": "MC2-251",
                "parent": "MC2-249",
                "text": "Reconnaitre, nommer et décrire un cercle, un carré, un rectangle, un triangle, un triangle rectangle en utilisant le vocabulaire approprié."
            },
            {
                "id": "MC2-252",
                "parent": "MC2-249",
                "text": "Connaitre les propriétés des angles et des égalités de longueur pour les carrés et les rectangles."
            },
            {
                "id": "MC2-253",
                "parent": "MC2-249",
                "text": "Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle et un cercle ou un assemblage de ces figures."
            },
            {
                "id": "MC2-254",
                "parent": "MC2-249",
                "text": "Utiliser la règle pour vérifier des alignements et l'équerre pour vérifier qu'un angle est droit."
            },
            {
                "id": "MC2-255",
                "parent": "MC2-249",
                "text": "Utiliser la règle graduée, l'équerre et le compas comme instruments de tracé."
            },
            {
                "id": "MC2-256",
                "parent": "MC2-249",
                "text": "Connaitre et utiliser le code pour les angles droits."
            },
            {
                "id": "MC2-257",
                "parent": "MC2-242",
                "text": "Le repérage dans le temps"
            },
            {
                "id": "MC2-258",
                "parent": "MC2-257",
                "text": "Connaitre et utiliser le vocabulaire lié aux positions relatives."
            },
            {
                "id": "MC2-259",
                "parent": "MC2-257",
                "text": "Situer des personnes ou des objets les uns par rapport aux autres ou par rapport à d'autres repères dans un espace familier."
            },
            {
                "id": "MC2-260",
                "parent": "MC2-257",
                "text": "Construire et utiliser des représentations d'un espace familier pour localiser, mémoriser ou communiquer un emplacement."
            },
            {
                "id": "MC2-261",
                "parent": "MC2-257",
                "text": "Construire des assemblages de cubes et de pavés."
            },
            {
                "id": "MC2-262",
                "parent": "MC2-257",
                "text": "Comprendre, utiliser et produire une suite d'instructions qui codent un déplacement en utilisant un vocabulaire spatial précis."
            },
            {
                "id": "MC2-263",
                "parent": "MC2-219",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "MC2-264",
                "parent": "MC2-263",
                "text": "Les solides"
            },
            {
                "id": "MC2-265",
                "parent": "MC2-264",
                "text": "Nommer un cube, une boule, un pavé, un cône, une pyramide ou un cylindre."
            },
            {
                "id": "MC2-266",
                "parent": "MC2-264",
                "text": "Décrire un cube, un pavé ou une pyramide en utilisant les termes « face », « sommet » et « arête »."
            },
            {
                "id": "MC2-267",
                "parent": "MC2-264",
                "text": "Connaitre le nombre et la nature des faces d'un cube ou d'un pavé."
            },
            {
                "id": "MC2-268",
                "parent": "MC2-264",
                "text": "Connaitre la nature des faces d'une pyramide."
            },
            {
                "id": "MC2-269",
                "parent": "MC2-264",
                "text": "Construire un cube, un pavé ou une pyramide."
            },
            {
                "id": "MC2-270",
                "parent": "MC2-264",
                "text": "Construire un cube à partir d'un patron."
            },
            {
                "id": "MC2-271",
                "parent": "MC2-263",
                "text": "La géométrie plane"
            },
            {
                "id": "MC2-272",
                "parent": "MC2-271",
                "text": "Utiliser le vocabulaire géométrique approprié."
            },
            {
                "id": "MC2-273",
                "parent": "MC2-271",
                "text": "Reconnaitre, nommer et décrire le carré, le rectangle, le triangle, le triangle rectangle et le losange."
            },
            {
                "id": "MC2-274",
                "parent": "MC2-271",
                "text": "Connaitre les propriétés des angles et les égalités de longueur pour les carrés, les rectangles et les losanges."
            },
            {
                "id": "MC2-275",
                "parent": "MC2-271",
                "text": "Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle et un cercle ou des assemblages de ces figures sur tout support (papier quadrillé ou pointé ou papier uni), avec une règle graduée, une équerre ou un compas."
            },
            {
                "id": "MC2-276",
                "parent": "MC2-271",
                "text": "Connaitre et utiliser le codage d'un angle droit et celui qui indique que des segments ont la même longueur."
            },
            {
                "id": "MC2-277",
                "parent": "MC2-271",
                "text": "Reconnaitre si une figure possède un ou plusieurs axes de symétrie en utilisant des pliages ou du papier calque."
            },
            {
                "id": "MC2-278",
                "parent": "MC2-271",
                "text": "Compléter, sur une feuille quadrillée ou pointée, une figure simple pour la rendre symétrique par rapport à un axe donné."
            },
            {
                "id": "MC2-279",
                "parent": "MC2",
                "text": "Organisation et gestion de données"
            },
            {
                "id": "MC2-280",
                "parent": "MC2-279",
                "text": "Cours préparatoire"
            },
            {
                "id": "MC2-281",
                "parent": "MC2-280",
                "text": "Collecter des données et présenter ces données sous forme d'un tableau ou d'un diagramme en barres."
            },
            {
                "id": "MC2-282",
                "parent": "MC2-280",
                "text": "Construire et compléter un tableau à double entrée."
            },
            {
                "id": "MC2-283",
                "parent": "MC2-279",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "MC2-284",
                "parent": "MC2-283",
                "text": "Produire un tableau ou un diagramme en barres pour présenter des données recueillies."
            },
            {
                "id": "MC2-285",
                "parent": "MC2-283",
                "text": "Lire et interpréter les données d'un diagramme en barres. Lire et interpréter les données d'un tableau à double entrée."
            },
            {
                "id": "MC2-286",
                "parent": "MC2-279",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "MC2-287",
                "parent": "MC2-286",
                "text": "Produire un tableau ou un diagramme en barres pour présenter des données recueillies."
            },
            {
                "id": "MC2-288",
                "parent": "MC2-286",
                "text": "Lire et interpréter les données d'un tableau à double entrée ou d'un diagramme en barres."
            },
            {
                "id": "MC2-289",
                "parent": "MC2-286",
                "text": "Résoudre des problèmes en utilisant les données d'un tableau à double entrée ou d'un diagramme en barre."
            },
            {
                "id": "MC3",
                "parent": "M",
                "text": "Cycle 3"
            },
            {
                "id": "MC3-0",
                "parent": "MC3",
                "text": "Nombres, calcul et résolution de problèmes"
            },
            {
                "id": "MC3-1",
                "parent": "MC3-0",
                "text": "Cours moyen première année"
            },
            {
                "id": "MC3-2",
                "parent": "MC3-1",
                "text": "Les nombres entiers"
            },
            {
                "id": "MC3-3",
                "parent": "MC3-2",
                "text": "Comparer et dénombrer des collections en les organisant "
            },
            {
                "id": "MC3-4",
                "parent": "MC3-2",
                "text": "Construire des collections de cardinal donné "
            },
            {
                "id": "MC3-5",
                "parent": "MC3-2",
                "text": "Connaître et utiliser les relations entre les unités de numération "
            },
            {
                "id": "MC3-6",
                "parent": "MC3-2",
                "text": "Connaître la suite écrite et la suite orale des nombres jusqu'à 999 999 "
            },
            {
                "id": "MC3-7",
                "parent": "MC3-2",
                "text": "Connaître la valeur des chiffres en fonction de leur position dans un nombre "
            },
            {
                "id": "MC3-8",
                "parent": "MC3-2",
                "text": "Connaître et utiliser diverses représentations d'un nombre et passer de l'une à l'autre "
            },
            {
                "id": "MC3-9",
                "parent": "MC3-2",
                "text": "Comprendre et savoir utiliser les expressions « égal à », « supérieur à », « inférieur à », « compris entre … et … » "
            },
            {
                "id": "MC3-10",
                "parent": "MC3-2",
                "text": "Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles =, < et > "
            },
            {
                "id": "MC3-11",
                "parent": "MC3-2",
                "text": "Ordonner des nombres dans l'ordre croissant ou décroissant "
            },
            {
                "id": "MC3-12",
                "parent": "MC3-2",
                "text": "Savoir placer des nombres et repérer des points sur une demi-droite graduée "
            },
            {
                "id": "MC3-13",
                "parent": "MC3-2",
                "text": "Savoir reconnaître les multiples de 2, de 5 et de 10 à partir de leur écriture chiffrée "
            },
            {
                "id": "MC3-14",
                "parent": "MC3-2",
                "text": "Savoir déterminer si un nombre entier donné est un multiple d'un nombre entier inférieur ou égal à 10 "
            },
            {
                "id": "MC3-15",
                "parent": "MC3-2",
                "text": "Savoir déterminer si un nombre entier inférieur ou égal à 10 est un diviseur d'un nombre entier donné"
            },
            {
                "id": "MC3-16",
                "parent": "MC3-1",
                "text": "Les fractions"
            },
            {
                "id": "MC3-17",
                "parent": "MC3-16",
                "text": "Savoir interpréter, représenter, écrire et lire des fractions "
            },
            {
                "id": "MC3-18",
                "parent": "MC3-16",
                "text": "Savoir écrire une fraction supérieure à 1 comme la somme d'un entier et d'une fraction inférieure à 1 "
            },
            {
                "id": "MC3-19",
                "parent": "MC3-16",
                "text": "Savoir écrire la somme d'un entier et d'une fraction inférieure à 1 comme une unique fraction "
            },
            {
                "id": "MC3-20",
                "parent": "MC3-16",
                "text": "Savoir encadrer une fraction par deux nombres entiers consécutifs "
            },
            {
                "id": "MC3-21",
                "parent": "MC3-16",
                "text": "Savoir placer une fraction ou la somme d'un nombre entier et d'une fraction inférieure à un sur une demi-droite graduée "
            },
            {
                "id": "MC3-22",
                "parent": "MC3-16",
                "text": "Savoir repérer un point d'une demi-droite graduée par une fraction ou par la somme d'un nombre entier et d'une fraction "
            },
            {
                "id": "MC3-23",
                "parent": "MC3-16",
                "text": "Comparer des fractions "
            },
            {
                "id": "MC3-24",
                "parent": "MC3-16",
                "text": "Additionner et soustraire des fractions "
            },
            {
                "id": "MC3-25",
                "parent": "MC3-16",
                "text": "Déterminer une fraction d'une quantité ou d'une grandeur"
            },
            {
                "id": "MC3-26",
                "parent": "MC3-1",
                "text": "Les nombres décimaux"
            },
            {
                "id": "MC3-27",
                "parent": "MC3-26",
                "text": "Interpréter, représenter, écrire et lire des fractions décimales "
            },
            {
                "id": "MC3-28",
                "parent": "MC3-26",
                "text": "Connaître et utiliser les relations entre unités simples, dixièmes et centièmes "
            },
            {
                "id": "MC3-29",
                "parent": "MC3-26",
                "text": "Placer une fraction décimale sur une demi-droite graduée et repérer un point d'une demi-droite graduée par une fraction décimale "
            },
            {
                "id": "MC3-30",
                "parent": "MC3-29",
                "text": "crire une fraction décimale supérieure à 1 comme la somme d'un nombre entier et d'une fraction décimale inférieure à 1 "
            },
            {
                "id": "MC3-31",
                "parent": "MC3-29",
                "text": "crire une fraction décimale supérieure à 1 comme la somme d'un nombre entier et de fractions décimales ayant un numérateur inférieur à 10 "
            },
            {
                "id": "MC3-32",
                "parent": "MC3-26",
                "text": "Comparer, encadrer, intercaler des fractions décimales en utilisant les symboles =, < et > "
            },
            {
                "id": "MC3-33",
                "parent": "MC3-26",
                "text": "Ordonner des fractions décimales dans l'ordre croissant ou décroissant "
            },
            {
                "id": "MC3-34",
                "parent": "MC3-26",
                "text": "Passer d'une écriture sous forme d'une fraction décimale ou d'une somme de fractions décimales à une écriture à virgule et réciproquement "
            },
            {
                "id": "MC3-35",
                "parent": "MC3-26",
                "text": "Interpréter, représenter, écrire et lire des nombres décimaux (écriture à virgule) "
            },
            {
                "id": "MC3-36",
                "parent": "MC3-26",
                "text": "Placer un nombre décimal en écriture à virgule sur une demi-droite graduée et repérer un point d'une demi-droite graduée par un nombre décimal "
            },
            {
                "id": "MC3-37",
                "parent": "MC3-26",
                "text": "Savoir donner la partie entière et l'arrondi à l'entier d'un nombre décimal "
            },
            {
                "id": "MC3-38",
                "parent": "MC3-26",
                "text": "Comparer, encadrer, intercaler, ordonner, par ordre croissant ou décroissant, des nombres décimaux donnés par leur écriture à virgule en utilisant les symboles =, < et >"
            },
            {
                "id": "MC3-39",
                "parent": "MC3-1",
                "text": "Le calcul mental"
            },
            {
                "id": "MC3-40",
                "parent": "MC3-39",
                "text": "Mémoriser des faits numériques"
            },
            {
                "id": "MC3-41",
                "parent": "MC3-40",
                "text": "Connaître des faits numériques usuels relatifs aux nombres entiers "
            },
            {
                "id": "MC3-42",
                "parent": "MC3-40",
                "text": "Connaître quelques relations entre des fractions usuelles "
            },
            {
                "id": "MC3-43",
                "parent": "MC3-40",
                "text": "Connaître l'écriture décimale de fractions usuelles"
            },
            {
                "id": "MC3-44",
                "parent": "MC3-39",
                "text": "Utiliser ses connaissances en numération pour calculer mentalement "
            },
            {
                "id": "MC3-45",
                "parent": "MC3-44",
                "text": "Ajouter ou soustraire un nombre entier inférieur à 10, d'unités, de dizaines, de centaines, de dixièmes ou de centièmes à un nombre décimal, lorsqu'il n'y a pas de retenue "
            },
            {
                "id": "MC3-46",
                "parent": "MC3-44",
                "text": "Multiplier un nombre entier par 10, 100 ou 1 000 "
            },
            {
                "id": "MC3-47",
                "parent": "MC3-44",
                "text": "Multiplier un nombre décimal par 10 "
            },
            {
                "id": "MC3-48",
                "parent": "MC3-44",
                "text": "Diviser un nombre décimal par 10"
            },
            {
                "id": "MC3-49",
                "parent": "MC3-39",
                "text": "Apprendre des procédures de calcul mental "
            },
            {
                "id": "MC3-50",
                "parent": "MC3-49",
                "text": "Ajouter ou soustraire 8, 9, 18, 19, 28, 29, 38 ou 39, à un nombre "
            },
            {
                "id": "MC3-51",
                "parent": "MC3-49",
                "text": "Multiplier un nombre entier inférieur à 10 par un nombre entier de dizaines ou de centaines "
            },
            {
                "id": "MC3-52",
                "parent": "MC3-49",
                "text": "Multiplier un nombre entier par 4 ou par 8 "
            },
            {
                "id": "MC3-53",
                "parent": "MC3-49",
                "text": "Multiplier un nombre entier par 5 "
            },
            {
                "id": "MC3-54",
                "parent": "MC3-49",
                "text": "Utiliser la distributivité de la multiplication par rapport à l'addition dans des cas simples"
            },
            {
                "id": "MC3-55",
                "parent": "MC3-1",
                "text": "Les quatre opérations"
            },
            {
                "id": "MC3-56",
                "parent": "MC3-55",
                "text": "Estimer le résultat d'une opération Savoir effectuer un calcul contenant des parenthèses "
            },
            {
                "id": "MC3-57",
                "parent": "MC3-55",
                "text": "Poser en colonnes et effectuer des additions et des soustractions de nombres décimaux "
            },
            {
                "id": "MC3-58",
                "parent": "MC3-55",
                "text": "Poser et effectuer des multiplications de deux nombres entiers "
            },
            {
                "id": "MC3-59",
                "parent": "MC3-55",
                "text": "Poser et effectuer des multiplications d'un nombre décimal par un nombre entier inférieur à 10 "
            },
            {
                "id": "MC3-60",
                "parent": "MC3-55",
                "text": "Poser et effectuer des divisions euclidiennes avec un diviseur à un chiffre"
            },
            {
                "id": "MC3-61",
                "parent": "MC3-1",
                "text": "La résolution de problèmes"
            },
            {
                "id": "MC3-62",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes additifs en une ou plusieurs étapes "
            },
            {
                "id": "MC3-63",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes multiplicatifs de type « parties-tout » en une étape "
            },
            {
                "id": "MC3-64",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes mixtes en plusieurs étapes "
            },
            {
                "id": "MC3-65",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes de comparaison multiplicative "
            },
            {
                "id": "MC3-66",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes de dénombrement "
            },
            {
                "id": "MC3-67",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes d'optimisation "
            },
            {
                "id": "MC3-68",
                "parent": "MC3-61",
                "text": "Résoudre des problèmes préparant à l'utilisation d'algorithmes"
            },
            {
                "id": "MC3-69",
                "parent": "MC3-1",
                "text": "Algèbre"
            },
            {
                "id": "MC3-70",
                "parent": "MC3-69",
                "text": "Trouver le nombre manquant dans une égalité à trous "
            },
            {
                "id": "MC3-71",
                "parent": "MC3-69",
                "text": "Résoudre des problèmes algébriques "
            },
            {
                "id": "MC3-72",
                "parent": "MC3-69",
                "text": "Exécuter ou produire un programme de calcul "
            },
            {
                "id": "MC3-73",
                "parent": "MC3-69",
                "text": "Identifier et formuler une règle de calcul pour poursuivre une suite de nombres "
            },
            {
                "id": "MC3-74",
                "parent": "MC3-69",
                "text": "Identifier des régularités et poursuivre une suite de motifs évolutive "
            },
            {
                "id": "MC3-75",
                "parent": "MC3-69",
                "text": "Trouver le nombre d'éléments pour une étape donnée dans une suite de motifs évolutive"
            },
            {
                "id": "MC3-76",
                "parent": "MC3-0",
                "text": "Sixième"
            },
            {
                "id": "MC3-77",
                "parent": "MC3-76",
                "text": "Les nombres entiers et décimaux"
            },
            {
                "id": "MC3-78",
                "parent": "MC3-77",
                "text": "Connaître et utiliser la valeur des chiffres selon leur rang dans l'écriture d'un nombre "
            },
            {
                "id": "MC3-79",
                "parent": "MC3-77",
                "text": "Connaître les liens entre les unités de numération unité, dizaine, centaine, millier, dixième, centième, millième "
            },
            {
                "id": "MC3-80",
                "parent": "MC3-77",
                "text": "Connaître des grands nombres entiers "
            },
            {
                "id": "MC3-81",
                "parent": "MC3-77",
                "text": "Reconnaître un nombre décimal "
            },
            {
                "id": "MC3-82",
                "parent": "MC3-77",
                "text": "Connaître la définition d'un pourcentage "
            },
            {
                "id": "MC3-83",
                "parent": "MC3-77",
                "text": "Associer et utiliser différentes écritures d'un nombre décimal : écriture à virgule, fraction, nombre mixte, pourcentage "
            },
            {
                "id": "MC3-84",
                "parent": "MC3-77",
                "text": "Placer sur une demi-droite graduée un point dont l'abscisse est un nombre décimal "
            },
            {
                "id": "MC3-85",
                "parent": "MC3-77",
                "text": "Repérer un nombre décimal sur une demi-droite graduée "
            },
            {
                "id": "MC3-86",
                "parent": "MC3-77",
                "text": "Comparer deux nombres décimaux "
            },
            {
                "id": "MC3-87",
                "parent": "MC3-77",
                "text": "Ordonner une liste de nombres décimaux"
            },
            {
                "id": "MC3-88",
                "parent": "MC3-77",
                "text": "Donner la valeur arrondie à l'unité, au dixième ou au centième, d'un nombre décimal "
            },
            {
                "id": "MC3-89",
                "parent": "MC3-77",
                "text": "Déterminer ou connaître la valeur arrondie de certains nombres non décimaux "
            },
            {
                "id": "MC3-90",
                "parent": "MC3-77",
                "text": "Encadrer un nombre décimal par deux nombres décimaux, intercaler un nombre décimal entre deux nombres décimaux "
            },
            {
                "id": "MC3-91",
                "parent": "MC3-77",
                "text": "Additionner et soustraire des nombres décimaux "
            },
            {
                "id": "MC3-92",
                "parent": "MC3-77",
                "text": "Multiplier un nombre entier ou un nombre décimal par 0,1, par 0,01, et par 0,001 "
            },
            {
                "id": "MC3-93",
                "parent": "MC3-77",
                "text": "Connaître le lien avec la division par 10, 100 et par 1 000 "
            },
            {
                "id": "MC3-94",
                "parent": "MC3-77",
                "text": "Comprendre le sens de la multiplication de deux nombres décimaux "
            },
            {
                "id": "MC3-95",
                "parent": "MC3-77",
                "text": "Calculer le produit de deux nombres décimaux "
            },
            {
                "id": "MC3-96",
                "parent": "MC3-77",
                "text": "Contrôler les résultats à l'aide d'ordres de grandeur "
            },
            {
                "id": "MC3-97",
                "parent": "MC3-77",
                "text": "Résoudre des problèmes mettant en jeu des multiplications entre des nombres décimaux "
            },
            {
                "id": "MC3-98",
                "parent": "MC3-77",
                "text": "Diviser un nombre décimal par un nombre entier non nul inférieur à 10 "
            },
            {
                "id": "MC3-99",
                "parent": "MC3-77",
                "text": "Résoudre des problèmes mettant en jeu des divisions décimales "
            },
            {
                "id": "MC3-100",
                "parent": "MC3-77",
                "text": "Effectuer la division euclidienne d'un nombre entier par un nombre entier inférieur à 100 Résoudre des problèmes mettant en jeu des divisions euclidiennes"
            },
            {
                "id": "MC3-101",
                "parent": "MC3-76",
                "text": "Les fractions"
            },
            {
                "id": "MC3-102",
                "parent": "MC3-101",
                "text": "Le sens quotient d'une fraction "
            },
            {
                "id": "MC3-103",
                "parent": "MC3-102",
                "text": "Relier une fraction au résultat exact de la division de son numérateur par son dénominateur "
            },
            {
                "id": "MC3-104",
                "parent": "MC3-102",
                "text": "Comprendre et connaître la définition du quotient d'un entier a par un entier b non nul "
            },
            {
                "id": "MC3-105",
                "parent": "MC3-102",
                "text": "Compléter des égalités à trous multiplicatives Placer une fraction sur une demi-droite graduée dans des cas simples "
            },
            {
                "id": "MC3-106",
                "parent": "MC3-102",
                "text": "Graduer un segment de longueur donnée Savoir que la fraction ab peut représenter un nombre entier, un nombre décimal non entier ou un nombre non décimal"
            },
            {
                "id": "MC3-107",
                "parent": "MC3-101",
                "text": "La fraction comme opérateur multiplicatif"
            },
            {
                "id": "MC3-108",
                "parent": "MC3-107",
                "text": "Utiliser une multiplication pour appliquer une fraction à un nombre entier"
            },
            {
                "id": "MC3-109",
                "parent": "MC3-101",
                "text": "Comparer des fractions "
            },
            {
                "id": "MC3-110",
                "parent": "MC3-108",
                "text": "tablir des égalités de fractions "
            },
            {
                "id": "MC3-111",
                "parent": "MC3-109",
                "text": "Comparer et encadrer des fractions "
            },
            {
                "id": "MC3-112",
                "parent": "MC3-109",
                "text": "Ordonner une liste de nombres écrits sous forme de fractions ou de nombres mixtes"
            },
            {
                "id": "MC3-113",
                "parent": "MC3-101",
                "text": "Effectuer des opérations sur les fractions "
            },
            {
                "id": "MC3-114",
                "parent": "MC3-113",
                "text": "Additionner et soustraire des fractions "
            },
            {
                "id": "MC3-115",
                "parent": "MC3-113",
                "text": "Multiplier une fraction par un nombre entier "
            },
            {
                "id": "MC3-116",
                "parent": "MC3-113",
                "text": "Résoudre des problèmes mettant en jeu des fractions "
            },
            {
                "id": "MC3-117",
                "parent": "MC3-113",
                "text": "Inventer des problèmes mettant en jeu des fractions"
            },
            {
                "id": "MC3-118",
                "parent": "MC3-101",
                "text": "Pourcentages "
            },
            {
                "id": "MC3-119",
                "parent": "MC3-118",
                "text": "Comprendre le sens d'un pourcentage "
            },
            {
                "id": "MC3-120",
                "parent": "MC3-118",
                "text": "Calculer une proportion (rapport entre une partie et le tout) et l'exprimer sous forme de pourcentage dans des cas simples "
            },
            {
                "id": "MC3-121",
                "parent": "MC3-118",
                "text": "Appliquer un pourcentage à une grandeur ou à un nombre"
            },
            {
                "id": "MC3-122",
                "parent": "MC3-76",
                "text": "Algèbre"
            },
            {
                "id": "MC3-123",
                "parent": "MC3-122",
                "text": "Résoudre des problèmes mettant en jeu des nombres inconnus "
            },
            {
                "id": "MC3-124",
                "parent": "MC3-123",
                "text": "Utiliser des modèles pré-algébriques pour résoudre des problèmes algébriques "
            },
            {
                "id": "MC3-125",
                "parent": "MC3-123",
                "text": "Identifier la structure d'un motif évolutif en repérant une régularité et en identifiant une structure"
            },
            {
                "id": "MC3-126",
                "parent": "MC3",
                "text": "Grandeurs et mesures"
            },
            {
                "id": "MC3-127",
                "parent": "MC3-126",
                "text": "Cours moyen première année"
            },
            {
                "id": "MC3-128",
                "parent": "MC3-127",
                "text": "Les longueurs "
            },
            {
                "id": "MC3-129",
                "parent": "MC3-128",
                "text": "Connaître et utiliser les unités de longueur du millimètre au kilomètre et les symboles associés "
            },
            {
                "id": "MC3-130",
                "parent": "MC3-128",
                "text": "Connaître les relations entre les unités de longueur "
            },
            {
                "id": "MC3-131",
                "parent": "MC3-128",
                "text": "Choisir une unité adaptée pour exprimer une longueur "
            },
            {
                "id": "MC3-132",
                "parent": "MC3-128",
                "text": "Comparer des longueurs Disposer de quelques longueurs de référence "
            },
            {
                "id": "MC3-133",
                "parent": "MC3-128",
                "text": "Estimer la longueur d'un objet ou d'une distance "
            },
            {
                "id": "MC3-134",
                "parent": "MC3-128",
                "text": "Savoir ce qu'est le périmètre d'une figure plane "
            },
            {
                "id": "MC3-135",
                "parent": "MC3-128",
                "text": "Déterminer le périmètre d'un polygone en utilisant une règle graduée Résoudre des problèmes mettant en jeu les longueurs des côtés d'un polygone et son périmètre"
            },
            {
                "id": "MC3-136",
                "parent": "MC3-127",
                "text": "Les masses "
            },
            {
                "id": "MC3-137",
                "parent": "MC3-136",
                "text": "Connaître et utiliser les unités de masse du milligramme au kilogramme et la tonne, et les symboles associés "
            },
            {
                "id": "MC3-138",
                "parent": "MC3-136",
                "text": "Connaître les relations entre les unités de masse "
            },
            {
                "id": "MC3-139",
                "parent": "MC3-136",
                "text": "Choisir une unité adaptée pour exprimer une masse "
            },
            {
                "id": "MC3-140",
                "parent": "MC3-136",
                "text": "Comparer des masses "
            },
            {
                "id": "MC3-141",
                "parent": "MC3-136",
                "text": "Disposer de quelques masses de référence "
            },
            {
                "id": "MC3-142",
                "parent": "MC3-136",
                "text": "Estimer la masse d'un objet"
            },
            {
                "id": "MC3-143",
                "parent": "MC3-127",
                "text": "Les contenances "
            },
            {
                "id": "MC3-144",
                "parent": "MC3-143",
                "text": "Connaître et utiliser les unités de contenance du millilitre à l'hectolitre et les symboles associés "
            },
            {
                "id": "MC3-145",
                "parent": "MC3-143",
                "text": "Connaître les relations entre les unités de contenance "
            },
            {
                "id": "MC3-146",
                "parent": "MC3-143",
                "text": "Choisir une unité adaptée pour exprimer une contenance Comparer des contenances"
            },
            {
                "id": "MC3-147",
                "parent": "MC3-127",
                "text": "Les aires "
            },
            {
                "id": "MC3-148",
                "parent": "MC3-147",
                "text": "Comparer les aires de différentes figures planes "
            },
            {
                "id": "MC3-149",
                "parent": "MC3-147",
                "text": "Déterminer des aires "
            },
            {
                "id": "MC3-150",
                "parent": "MC3-147",
                "text": "Connaître et utiliser les centimètres carrés pour exprimer des aires"
            },
            {
                "id": "MC3-151",
                "parent": "MC3-127",
                "text": "Les angles"
            },
            {
                "id": "MC3-152",
                "parent": "MC3-151",
                "text": "Utiliser le lexique spécifique associé aux angles "
            },
            {
                "id": "MC3-153",
                "parent": "MC3-151",
                "text": "Comprendre et utiliser les notations des angles "
            },
            {
                "id": "MC3-154",
                "parent": "MC3-151",
                "text": "Comparer des angles"
            },
            {
                "id": "MC3-155",
                "parent": "MC3-127",
                "text": "Le repérage dans le temps et les durées"
            },
            {
                "id": "MC3-156",
                "parent": "MC3-155",
                "text": "Lire l'heure sur une horloge à aiguilles "
            },
            {
                "id": "MC3-157",
                "parent": "MC3-155",
                "text": "Positionner les aiguilles d'une horloge correspondant à une heure donnée en heure et minute "
            },
            {
                "id": "MC3-158",
                "parent": "MC3-155",
                "text": "Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (instants et durées sont exprimés en heure et minute) "
            },
            {
                "id": "MC3-159",
                "parent": "MC3-155",
                "text": "Résoudre des problèmes à une ou deux étapes impliquant des durées"
            },
            {
                "id": "MC3-160",
                "parent": "MC3-126",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "MC3-161",
                "parent": "MC3-160",
                "text": "Les aires "
            },
            {
                "id": "MC3-162",
                "parent": "MC3-161",
                "text": "Comparer les aires de différentes figures planes Déterminer des aires "
            },
            {
                "id": "MC3-163",
                "parent": "MC3-161",
                "text": "Connaître et utiliser les unités centimètre carré, décimètre carré et mètre carré pour exprimer des aires "
            },
            {
                "id": "MC3-164",
                "parent": "MC3-161",
                "text": "Convertir des aires entre différentes unités Déterminer l'aire d'un carré ou d'un rectangle"
            },
            {
                "id": "MC3-165",
                "parent": "MC3-160",
                "text": "Les angles "
            },
            {
                "id": "MC3-166",
                "parent": "MC3-165",
                "text": "Utiliser le lexique spécifique associé aux angles "
            },
            {
                "id": "MC3-167",
                "parent": "MC3-165",
                "text": "Comprendre et utiliser les notations des angles "
            },
            {
                "id": "MC3-168",
                "parent": "MC3-165",
                "text": "Comparer des angles "
            },
            {
                "id": "MC3-169",
                "parent": "MC3-165",
                "text": "Construire un angle égal à la somme de deux angles donnés ou un angle multiple d'un angle donné "
            },
            {
                "id": "MC3-170",
                "parent": "MC3-165",
                "text": "Construire par pliage la moitié d'un angle donné Savoir qu'un angle droit mesure 90°"
            },
            {
                "id": "MC3-171",
                "parent": "MC3-160",
                "text": "Le repérage dans le temps et les durées "
            },
            {
                "id": "MC3-172",
                "parent": "MC3-171",
                "text": "Lire l'heure sur une horloge à aiguilles "
            },
            {
                "id": "MC3-173",
                "parent": "MC3-171",
                "text": "Positionner les aiguilles d'une horloge correspondant à une heure donnée en heure, minute et seconde "
            },
            {
                "id": "MC3-174",
                "parent": "MC3-171",
                "text": "Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (instants et durées sont exprimés en heure, minute et seconde) "
            },
            {
                "id": "MC3-175",
                "parent": "MC3-171",
                "text": "Résoudre des problèmes à une ou plusieurs étapes impliquant des durées"
            },
            {
                "id": "MC3-176",
                "parent": "MC3-126",
                "text": "Sixième"
            },
            {
                "id": "MC3-177",
                "parent": "MC3-176",
                "text": "Les longueurs"
            },
            {
                "id": "MC3-178",
                "parent": "MC3-177",
                "text": "Savoir que le périmètre du disque est proportionnel à son diamètre "
            },
            {
                "id": "MC3-179",
                "parent": "MC3-177",
                "text": "Connaître la formule du périmètre d'un disque Calculer le périmètre d'un disque "
            },
            {
                "id": "MC3-180",
                "parent": "MC3-177",
                "text": "Calculer des périmètres de figures composées Résoudre des problèmes impliquant des longueurs"
            },
            {
                "id": "MC3-181",
                "parent": "MC3-176",
                "text": "Les aires"
            },
            {
                "id": "MC3-182",
                "parent": "MC3-181",
                "text": "Effectuer des conversions d'aire "
            },
            {
                "id": "MC3-183",
                "parent": "MC3-181",
                "text": "Connaître la formule de l'aire d'un carré ou d'un rectangle "
            },
            {
                "id": "MC3-184",
                "parent": "MC3-181",
                "text": "Calculer l'aire d'un carré ou d'un rectangle"
            },
            {
                "id": "MC3-185",
                "parent": "MC3-176",
                "text": "Les volumes"
            },
            {
                "id": "MC3-186",
                "parent": "MC3-185",
                "text": "Connaître l'unité centimètre cube "
            },
            {
                "id": "MC3-187",
                "parent": "MC3-185",
                "text": "Comparer des volumes "
            },
            {
                "id": "MC3-188",
                "parent": "MC3-185",
                "text": "Déterminer un volume"
            },
            {
                "id": "MC3-189",
                "parent": "MC3-176",
                "text": "Le repérage dans le temps et les durées"
            },
            {
                "id": "MC3-190",
                "parent": "MC3-189",
                "text": "Effectuer des calculs sur des horaires et des durées "
            },
            {
                "id": "MC3-191",
                "parent": "MC3-189",
                "text": "Résoudre des problèmes impliquant des horaires et des durées "
            },
            {
                "id": "MC3-192",
                "parent": "MC3-189",
                "text": "Convertir des durées"
            },
            {
                "id": "MC3-193",
                "parent": "MC3",
                "text": "Espace et géométrie"
            },
            {
                "id": "MC3-194",
                "parent": "MC3-193",
                "text": "Cours moyen première année"
            },
            {
                "id": "MC3-195",
                "parent": "MC3-194",
                "text": "La géométrie plane"
            },
            {
                "id": "MC3-196",
                "parent": "MC3-195",
                "text": "Utiliser le vocabulaire géométrique approprié dans le contexte d'apprentissage des notions correspondantes "
            },
            {
                "id": "MC3-197",
                "parent": "MC3-195",
                "text": "Utiliser les outils géométriques usuels : règle, règle graduée, équerre et compas "
            },
            {
                "id": "MC3-198",
                "parent": "MC3-195",
                "text": "Connaître les codes usuels utilisés en géométrie "
            },
            {
                "id": "MC3-199",
                "parent": "MC3-195",
                "text": "Décrire et reconnaître un cercle et un disque comme un ensemble de points caractérisés par leur distance à un point donné "
            },
            {
                "id": "MC3-200",
                "parent": "MC3-195",
                "text": "Reconnaître et utiliser la notion de perpendicularité "
            },
            {
                "id": "MC3-201",
                "parent": "MC3-195",
                "text": "Reconnaître et utiliser la notion de parallélisme "
            },
            {
                "id": "MC3-202",
                "parent": "MC3-195",
                "text": "Reconnaître et nommer les figures suivantes en faisant référence à leur définition : triangle, triangle rectangle, triangle isocèle, triangle équilatéral, quadrilatère, carré, rectangle et losange "
            },
            {
                "id": "MC3-203",
                "parent": "MC3-195",
                "text": "Connaître les propriétés de parallélisme des côtés opposés, des égalités de longueurs et d'angles pour les figures usuelles : triangle rectangle, triangle isocèle, triangle équilatéral, carré, rectangle et losange. "
            },
            {
                "id": "MC3-204",
                "parent": "MC3-195",
                "text": "Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle ou un cercle ou des assemblages de ces figures sur tout support (papier quadrillé, pointé ou uni), avec une règle graduée, une équerre ou un compas. "
            },
            {
                "id": "MC3-205",
                "parent": "MC3-195",
                "text": "Construire une figure géométrique composée de segments, de droites, de polygones usuels et de cercles."
            },
            {
                "id": "MC3-206",
                "parent": "MC3-195",
                "text": "Reconnaître si une figure possède un ou plusieurs axes de symétrie "
            },
            {
                "id": "MC3-207",
                "parent": "MC3-195",
                "text": "Compléter une figure pour la rendre symétrique par rapport à une droite donnée, horizontale ou verticale Construire, sur papier quadrillé, la figure symétrique d'une figure donnée par rapport à une droite horizontale ou verticale"
            },
            {
                "id": "MC3-208",
                "parent": "MC3-194",
                "text": "Les solides"
            },
            {
                "id": "MC3-209",
                "parent": "MC3-208",
                "text": "Nommer un cube, une boule, un pavé, un cône, une pyramide, un cylindre et un prisme droit Décrire un cube, un pavé, une pyramide et un prisme droit en faisant référence à des propriétés et en utilisant le vocabulaire approprié "
            },
            {
                "id": "MC3-210",
                "parent": "MC3-208",
                "text": "Connaître le nombre et la nature des faces d'un cube ou d'un pavé "
            },
            {
                "id": "MC3-211",
                "parent": "MC3-208",
                "text": "Connaître la nature des faces d'une pyramide "
            },
            {
                "id": "MC3-212",
                "parent": "MC3-208",
                "text": "Connaître la nature des faces d'un prisme droit "
            },
            {
                "id": "MC3-213",
                "parent": "MC3-208",
                "text": "Construire un cube, un pavé, une pyramide ou un prisme droit "
            },
            {
                "id": "MC3-214",
                "parent": "MC3-208",
                "text": "Reconnaître un patron d'un cube Construire un patron d'un cube"
            },
            {
                "id": "MC3-215",
                "parent": "MC3-194",
                "text": "Le repérage dans l'espace O"
            },
            {
                "id": "MC3-216",
                "parent": "MC3-215",
                "text": "Connaître et utiliser le vocabulaire lié aux déplacements "
            },
            {
                "id": "MC3-217",
                "parent": "MC3-215",
                "text": "Comprendre, utiliser et produire une suite d'instructions qui décrivent un déplacement en utilisant un vocabulaire spatial précis "
            },
            {
                "id": "MC3-218",
                "parent": "MC3-215",
                "text": "Résoudre des problèmes portant sur des assemblages de cubes"
            },
            {
                "id": "MC3-219",
                "parent": "MC3-193",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "MC3-220",
                "parent": "MC3-219",
                "text": "La géométrie plane"
            },
            {
                "id": "MC3-221",
                "parent": "MC3-220",
                "text": "Utiliser le vocabulaire géométrique approprié dans le contexte d'apprentissage des notions correspondantes "
            },
            {
                "id": "MC3-222",
                "parent": "MC3-220",
                "text": "Utiliser les outils géométriques usuels : règle, règle graduée, équerre et compas "
            },
            {
                "id": "MC3-223",
                "parent": "MC3-220",
                "text": "Connaître les notations et les codes usuels utilisés en géométrie "
            },
            {
                "id": "MC3-224",
                "parent": "MC3-220",
                "text": "Reconnaître et utiliser la notion de perpendicularité "
            },
            {
                "id": "MC3-225",
                "parent": "MC3-220",
                "text": "Reconnaître et utiliser la notion de parallélisme Décrire et reconnaître un cercle et un disque comme un ensemble de points caractérisés par leur distance à un point donné "
            },
            {
                "id": "MC3-226",
                "parent": "MC3-220",
                "text": "Reconnaître et nommer les figures suivantes en s'appuyant sur leur définition : triangle, triangle rectangle, triangle isocèle, triangle équilatéral, quadrilatère, carré, rectangle, losange, trapèze, trapèze rectangle, pentagone et hexagone"
            },
            {
                "id": "MC3-227",
                "parent": "MC3-220",
                "text": "Connaître les propriétés de parallélisme des côtés opposés, des égalités de longueurs et d'angles pour les figures usuelles : triangle rectangle, triangle isocèle, triangle équilatéral, carré, rectangle, losange, trapèze et trapèze rectangle "
            },
            {
                "id": "MC3-228",
                "parent": "MC3-220",
                "text": "Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle ou un cercle ou des assemblages de ces figures sur tout support (papier quadrillé, pointé ou uni), avec une règle graduée, une équerre ou un compas. "
            },
            {
                "id": "MC3-229",
                "parent": "MC3-220",
                "text": "Construire une figure géométrique composée de segments, de droites, de polygones usuels et de cercles "
            },
            {
                "id": "MC3-230",
                "parent": "MC3-229",
                "text": "laborer un programme de construction Construire, sur papier quadrillé, la figure symétrique d'une figure donnée par rapport à une droite verticale, horizontale ou une diagonale du quadrillage"
            },
            {
                "id": "MC3-231",
                "parent": "MC3-219",
                "text": "Les solides"
            },
            {
                "id": "MC3-232",
                "parent": "MC3-231",
                "text": "Nommer un cube, une boule, un pavé, un cône, une pyramide, un cylindre ou un prisme droit Décrire un cube, un pavé, une pyramide ou un prisme droit en faisant référence à des propriétés et en utilisant le vocabulaire approprié "
            },
            {
                "id": "MC3-233",
                "parent": "MC3-231",
                "text": "Reconnaître un patron d'un cube Construire un patron d'un cube "
            },
            {
                "id": "MC3-234",
                "parent": "MC3-231",
                "text": "Reconnaître un patron d'un pavé"
            },
            {
                "id": "MC3-235",
                "parent": "MC3-219",
                "text": "Déplacements dans l'espace "
            },
            {
                "id": "MC3-236",
                "parent": "MC3-235",
                "text": "Connaître et utiliser le vocabulaire lié aux déplacements "
            },
            {
                "id": "MC3-237",
                "parent": "MC3-235",
                "text": "Comprendre, utiliser et produire une suite d'instructions qui décrivent un déplacement en utilisant un vocabulaire spatial précis "
            },
            {
                "id": "MC3-238",
                "parent": "MC3-235",
                "text": "Résoudre des problèmes portant sur des assemblages de cubes"
            },
            {
                "id": "MC3-239",
                "parent": "MC3-193",
                "text": "Sixième"
            },
            {
                "id": "MC3-240",
                "parent": "MC3-235",
                "text": "tude de configurations planes"
            },
            {
                "id": "MC3-241",
                "parent": "MC3-235",
                "text": "Distances "
            },
            {
                "id": "MC3-242",
                "parent": "MC3-235",
                "text": "Connaître et utiliser la définition de la distance entre deux points "
            },
            {
                "id": "MC3-243",
                "parent": "MC3-235",
                "text": "Connaître et utiliser la définition du milieu d'un segment"
            },
            {
                "id": "MC3-244",
                "parent": "MC3-235",
                "text": "Cercles et disques "
            },
            {
                "id": "MC3-245",
                "parent": "MC3-244",
                "text": "Connaître les définitions d'un cercle, d'un disque, d'un rayon, d'un diamètre, d'une corde "
            },
            {
                "id": "MC3-246",
                "parent": "MC3-244",
                "text": "Comprendre la définition d'un cercle et celle d'un disque sous la forme d'ensembles de points "
            },
            {
                "id": "MC3-247",
                "parent": "MC3-244",
                "text": "Résoudre des problèmes mettant en jeu des distances à un point"
            },
            {
                "id": "MC3-248",
                "parent": "MC3-235",
                "text": "Médiatrice d'un segment "
            },
            {
                "id": "MC3-249",
                "parent": "MC3-248",
                "text": "Connaître la définition de la médiatrice d'un segment "
            },
            {
                "id": "MC3-250",
                "parent": "MC3-248",
                "text": "Comprendre et utiliser la propriété caractéristique de la médiatrice d'un segment "
            },
            {
                "id": "MC3-251",
                "parent": "MC3-248",
                "text": "Résoudre des problèmes en s'appuyant sur la propriété caractéristique de la médiatrice"
            },
            {
                "id": "MC3-252",
                "parent": "MC3-235",
                "text": "Angles"
            },
            {
                "id": "MC3-253",
                "parent": "MC3-252",
                "text": "Connaître et utiliser les angles ainsi que le lexique et les notations qui s'y rapportent : angle droit, angle plat, angle plein, angle nul, angle aigu, angle obtus, angles opposés par le sommet, angles adjacents, angles supplémentaires "
            },
            {
                "id": "MC3-254",
                "parent": "MC3-252",
                "text": "Mesurer un angle Construire un angle de mesure donnée"
            },
            {
                "id": "MC3-255",
                "parent": "MC3-235",
                "text": "Bissectrice d'un angle saillant "
            },
            {
                "id": "MC3-256",
                "parent": "MC3-255",
                "text": "Connaître la définition de la bissectrice d'un angle saillant "
            },
            {
                "id": "MC3-257",
                "parent": "MC3-255",
                "text": "Utiliser la définition de la bissectrice d'un angle pour effectuer des constructions et résoudre des problèmes"
            },
            {
                "id": "MC3-258",
                "parent": "MC3-235",
                "text": "Triangles"
            },
            {
                "id": "MC3-259",
                "parent": "MC3-258",
                "text": "Construire des triangles "
            },
            {
                "id": "MC3-260",
                "parent": "MC3-258",
                "text": "Connaître et utiliser les propriétés angulaires des triangles particuliers : triangle rectangle, triangle isocèle, triangle équilatéral "
            },
            {
                "id": "MC3-261",
                "parent": "MC3-258",
                "text": "Connaître la valeur de la somme des mesures des angles d'un triangle "
            },
            {
                "id": "MC3-262",
                "parent": "MC3-258",
                "text": "L'utiliser pour calculer des angles, effectuer des constructions et résoudre des problèmes "
            },
            {
                "id": "MC3-263",
                "parent": "MC3-258",
                "text": "Savoir que les médiatrices d'un triangle sont concourantes "
            },
            {
                "id": "MC3-264",
                "parent": "MC3-258",
                "text": "Connaître et construire le cercle circonscrit à un triangle"
            },
            {
                "id": "MC3-265",
                "parent": "MC3-235",
                "text": "Symétrie axiale"
            },
            {
                "id": "MC3-266",
                "parent": "MC3-265",
                "text": "Connaître la définition du symétrique d'un point par rapport à une droite "
            },
            {
                "id": "MC3-267",
                "parent": "MC3-265",
                "text": "Connaître et utiliser les propriétés de la symétrie axiale pour effectuer des constructions"
            },
            {
                "id": "MC3-268",
                "parent": "MC3-239",
                "text": "La vision dans l'espace"
            },
            {
                "id": "MC3-269",
                "parent": "MC3-268",
                "text": "Voir dans l'espace des assemblages de cubes"
            },
            {
                "id": "MC3-270",
                "parent": "MC3",
                "text": "Organisation et gestion de données et probabilités"
            },
            {
                "id": "MC3-271",
                "parent": "MC3-270",
                "text": "Cours moyen première année"
            },
            {
                "id": "MC3-272",
                "parent": "MC3-271",
                "text": "Organisation et gestion de données"
            },
            {
                "id": "MC3-273",
                "parent": "MC3-272",
                "text": "Recueillir des données et produire un tableau, un diagramme en barres ou un ensemble de points dans un repère pour les présenter "
            },
            {
                "id": "MC3-274",
                "parent": "MC3-272",
                "text": "Lire et interpréter les données d'un tableau à simple ou double entrée, d'un diagramme en barres ou d'une courbe "
            },
            {
                "id": "MC3-275",
                "parent": "MC3-272",
                "text": "Résoudre des problèmes en une ou plusieurs étapes en utilisant les données d'un tableau à simple ou double entrée, d'un diagramme en barres ou d'une courbe"
            },
            {
                "id": "MC3-276",
                "parent": "MC3-271",
                "text": "Les probabilités"
            },
            {
                "id": "MC3-277",
                "parent": "MC3-276",
                "text": "Identifier des expériences aléatoires "
            },
            {
                "id": "MC3-278",
                "parent": "MC3-276",
                "text": "Identifier toutes les issues possibles lors d'une expérience aléatoire simple "
            },
            {
                "id": "MC3-279",
                "parent": "MC3-276",
                "text": "Comprendre et utiliser le vocabulaire approprié : « impossible », « possible », « certain », « probable », « peu probable », « une chance sur deux » "
            },
            {
                "id": "MC3-280",
                "parent": "MC3-276",
                "text": "Comparer des issues d'expériences aléatoires ou des évènements selon leur probabilité de réalisation "
            },
            {
                "id": "MC3-281",
                "parent": "MC3-276",
                "text": "Comprendre que ce n'est pas parce qu'il y a deux issues possibles que chacune a une chance sur deux de se réaliser "
            },
            {
                "id": "MC3-282",
                "parent": "MC3-276",
                "text": "Reconnaître des situations d'équiprobabilité"
            },
            {
                "id": "MC3-283",
                "parent": "MC3-270",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "MC3-284",
                "parent": "MC3-283",
                "text": "Organisation et gestion de données"
            },
            {
                "id": "MC3-285",
                "parent": "MC3-284",
                "text": "Recueillir des données et produire un tableau, un diagramme en barres ou un ensemble de points dans un repère pour présenter des données recueillies Lire et interpréter les données d'un tableau, d'un diagramme en barres, d'un diagramme circulaire ou d'une courbe Résoudre des problèmes en une ou deux étapes en utilisant les données d'un tableau, d'un diagramme en barres, d'un diagramme circulaire ou d'une courbe"
            },
            {
                "id": "MC3-286",
                "parent": "MC3-283",
                "text": "Les probabilités"
            },
            {
                "id": "MC3-287",
                "parent": "MC3-286",
                "text": "Identifier toutes les issues possibles lors d'une expérience aléatoire simple "
            },
            {
                "id": "MC3-288",
                "parent": "MC3-286",
                "text": "Identifier toutes les issues réalisant un évènement dans une expérience aléatoire simple "
            },
            {
                "id": "MC3-289",
                "parent": "MC3-286",
                "text": "Dans une situation d'équiprobabilité, lors d'une expérience aléatoire simple, exprimer la probabilité d'un évènement sous la forme « a chances sur b » "
            },
            {
                "id": "MC3-290",
                "parent": "MC3-286",
                "text": "Comparer des probabilités dans des cas simples "
            },
            {
                "id": "MC3-291",
                "parent": "MC3-286",
                "text": "Comprendre la notion d'indépendance lors de la répétition de la même expérience aléatoire "
            },
            {
                "id": "MC3-292",
                "parent": "MC3-286",
                "text": "Dans des situations d'équiprobabilité, recenser toutes les issues possibles d'une expérience aléatoire en deux étapes dans un tableau ou dans un arbre afin de déterminer des probabilités"
            },
            {
                "id": "MC3-293",
                "parent": "MC3-270",
                "text": "Sixième"
            },
            {
                "id": "MC3-294",
                "parent": "MC3-293",
                "text": "Organisation et gestion de données"
            },
            {
                "id": "MC3-295",
                "parent": "MC3-294",
                "text": "Planifier une enquête et recueillir des données "
            },
            {
                "id": "MC3-296",
                "parent": "MC3-294",
                "text": "Réaliser des mesures et les consigner dans un tableau "
            },
            {
                "id": "MC3-297",
                "parent": "MC3-294",
                "text": "Construire un tableau simple pour présenter des données (observations, caractères) "
            },
            {
                "id": "MC3-298",
                "parent": "MC3-294",
                "text": "Faire un choix en filtrant les données d'un tableau selon un critère"
            },
            {
                "id": "MC3-299",
                "parent": "MC3-293",
                "text": "Les probabilités"
            },
            {
                "id": "MC3-300",
                "parent": "MC3-299",
                "text": "Savoir que la probabilité d'un évènement est un nombre compris entre 0 et 1 "
            },
            {
                "id": "MC3-301",
                "parent": "MC3-299",
                "text": "Calculer des probabilités dans des situations simples d'équiprobabilité "
            },
            {
                "id": "MC3-302",
                "parent": "MC3-299",
                "text": "Comparer des résultats d'une expérience aléatoire répétée à une probabilité calculée"
            },
            {
                "id": "MC3-303",
                "parent": "MC3",
                "text": "La proportionnalité"
            },
            {
                "id": "MC3-304",
                "parent": "MC3-303",
                "text": "Cours moyen première année"
            },
            {
                "id": "MC3-305",
                "parent": "MC3-304",
                "text": "Identifier une situation de proportionnalité Savoir résoudre un problème de proportionnalité"
            },
            {
                "id": "MC3-306",
                "parent": "MC3-303",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "MC3-307",
                "parent": "MC3-306",
                "text": "Identifier une situation de proportionnalité Savoir résoudre un problème de proportionnalité"
            },
            {
                "id": "MC3-308",
                "parent": "MC3-303",
                "text": "Sixième"
            },
            {
                "id": "MC3-309",
                "parent": "MC3-308",
                "text": "Connaître la définition de la proportionnalité entre deux grandeurs et la mettre en lien avec des expressions de la vie courante "
            },
            {
                "id": "MC3-310",
                "parent": "MC3-308",
                "text": "Identifier si une situation relève du « modèle » de la proportionnalité Résoudre un problème de proportionnalité en choisissant une procédure adaptée : propriété de linéarité pour la multiplication ou l'addition, retour à l'unité "
            },
            {
                "id": "MC3-311",
                "parent": "MC3-308",
                "text": "Représenter une situation de proportionnalité à l'aide d'un tableau ou de notations symboliques S'initier à la résolution de problèmes d'échelles"
            },
            {
                "id": "MC3-312",
                "parent": "MC3",
                "text": "Initiation à la pensée informatique"
            },
            {
                "id": "MC3-313",
                "parent": "MC3-312",
                "text": "Sixième"
            },
            {
                "id": "MC3-314",
                "parent": "MC3-313",
                "text": "Identifier une instruction ou une séquence d'instructions "
            },
            {
                "id": "MC3-315",
                "parent": "MC3-313",
                "text": "Produire et exécuter une séquence d'instructions "
            },
            {
                "id": "MC3-316",
                "parent": "MC3-313",
                "text": "Répéter à la main une séquence d'instructions pour accomplir une tâche imposée "
            },
            {
                "id": "MC3-317",
                "parent": "MC3-313",
                "text": "Programmer la construction d'un chemin simple"
            },

            {
                "id": "FC2",
                "parent": "F",
                "text": "Cycle 2"
            },
            {
                "id": "FC2-0",
                "parent": "FC2",
                "text": "lecture"
            },
            {
                "id": "FC2-1",
                "parent": "FC2-0",
                "text": "Cours préparatoire"
            },
            {
                "id": "FC2-2",
                "parent": "FC2-1",
                "text": "Identifier les mots de manière de plus en plus aisée"
            },
            {
                "id": "FC2-3",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-4",
                "parent": "FC2-2",
                "text": "En fin de période 1"
            },
            {
                "id": "FC2-5",
                "parent": "",
                "text": "Décoder et encoder 12 à 15 correspondances grapho-phonémiques (CGP) régulières, fréquentes et aisément prononçables."
            },
            {
                "id": "FC2-6",
                "parent": "",
                "text": "Déchiffrer des syllabes, des mots puis des phrases en fonction de la progression de l'apprentissage des CGP."
            },
            {
                "id": "FC2-7",
                "parent": "FC2-2",
                "text": "En milieu d'année"
            },
            {
                "id": "FC2-8",
                "parent": "",
                "text": "Décoder et encoder de 25 à 30 CGP."
            },
            {
                "id": "FC2-9",
                "parent": "",
                "text": "Avoir pris conscience de la présence de lettres finales muettes et s'appuyer sur le sens des mots pour les déchiffrer correctement."
            },
            {
                "id": "FC2-10",
                "parent": "",
                "text": "Mémoriser les mots fréquents et réguliers."
            },
            {
                "id": "FC2-11",
                "parent": "",
                "text": "Déchiffrer entre 15 et 30 mots par minute."
            },
            {
                "id": "FC2-12",
                "parent": "FC2-2",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-13",
                "parent": "",
                "text": "Décoder 30 mots par minute au minimum fin CP, sans préparation, 50 après préparation."
            },
            {
                "id": "FC2-14",
                "parent": "FC2-1",
                "text": "Lire à voix haute"
            },
            {
                "id": "FC2-15",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-16",
                "parent": "FC2-14",
                "text": "Dès le début de l'année"
            },
            {
                "id": "FC2-17",
                "parent": "",
                "text": "Oraliser les syllabes déchiffrées et encodées, puis les mots."
            },
            {
                "id": "FC2-18",
                "parent": "FC2-14",
                "text": "En cours d'année"
            },
            {
                "id": "FC2-19",
                "parent": "",
                "text": "Oraliser régulièrement les mots et phrases déchiffrés et encodés."
            },
            {
                "id": "FC2-20",
                "parent": "",
                "text": "S'entrainer à lire des textes déchiffrables de manière à automatiser sa lecture."
            },
            {
                "id": "FC2-21",
                "parent": "FC2-14",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-22",
                "parent": "",
                "text": "Lire après préparation un texte adapté à son niveau de lecture avec une vitesse de 30 mots par minute au minimum sans préparation, 50 après préparation."
            },
            {
                "id": "FC2-23",
                "parent": "",
                "text": "Identifier les marques de ponctuation et les prendre en compte sur un texte préparé."
            },
            {
                "id": "FC2-24",
                "parent": "",
                "text": "Amorcer une lecture expressive."
            },
            {
                "id": "FC2-25",
                "parent": "FC2-14",
                "text": "Comprendre un texte"
            },
            {
                "id": "FC2-26",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-27",
                "parent": "FC2-25",
                "text": "Dégager le sens global d'un texte entendu ou lu de façon autonome."
            },
            {
                "id": "FC2-28",
                "parent": "FC2-25",
                "text": "Identifier les mots inconnus dans un texte et chercher à leur donner un sens."
            },
            {
                "id": "FC2-29",
                "parent": "FC2-25",
                "text": "Se repérer dans la chaine anaphorique (qui relie un nom à sa ou ses reprise(s) pronominale(s) ou à d'autres noms de sens équivalent)."
            },
            {
                "id": "FC2-30",
                "parent": "FC2-25",
                "text": "Comprendre ce qui est implicite (inférences simples)."
            },
            {
                "id": "FC2-31",
                "parent": "FC2-25",
                "text": "Justifier ses réponses par un retour au texte."
            },
            {
                "id": "FC2-32",
                "parent": "FC2-25",
                "text": "Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d'une dizaine de lignes."
            },
            {
                "id": "FC2-33",
                "parent": "FC2-1",
                "text": "Devenir lecteur"
            },
            {
                "id": "FC2-34",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-35",
                "parent": "FC2-25",
                "text": "Lire 5 à 10 oeuvres complètes et variées issues du patrimoine et de la littérature de jeunesse (albums, romans, contes, fables, poèmes, pièces de théâtre et documentaires)."
            },
            {
                "id": "FC2-36",
                "parent": "FC2-25",
                "text": "Repérer et reconnaitre des types de personnages."
            },
            {
                "id": "FC2-37",
                "parent": "FC2-25",
                "text": "Aller vers les livres et être capable d'en choisir à titre personnel."
            },
            {
                "id": "FC2-38",
                "parent": "FC2-25",
                "text": "Relier ses lectures à son expérience personnelle, être en mesure d'établir des liens entre ses différentes lectures (mise en réseau)."
            },
            {
                "id": "FC2-39",
                "parent": "FC2-25",
                "text": "Fréquenter régulièrement des lieux de lecture et se familiariser avec eux, rencontrer des acteurs du livre."
            },
            {
                "id": "FC2-40",
                "parent": "FC2-34",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "FC2-41",
                "parent": "FC2-40",
                "text": "Identifier les mots de manière de plus en plus aisée"
            },
            {
                "id": "FC2-42",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-43",
                "parent": "FC2-41",
                "text": "Tout au long de l'année"
            },
            {
                "id": "FC2-44",
                "parent": "FC2-39",
                "text": "Automatiser le décodage des correspondances graphophonémiques (CGP) apprises au CP."
            },
            {
                "id": "FC2-45",
                "parent": "FC2-41",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-46",
                "parent": "FC2-39",
                "text": "Décoder toutes les CGP y compris les plus complexes."
            },
            {
                "id": "FC2-47",
                "parent": "FC2-39",
                "text": "Avoir mémorisé l'ensemble des CGP dans tous les types d'écriture, en particulier celles des sons proches (en encodage et décodage)."
            },
            {
                "id": "FC2-48",
                "parent": "FC2-39",
                "text": "Identifier directement l'ensemble des mots courants et déchiffrer avec exactitude les mots nouveaux dont le décodage n'a pas encore été automatisé."
            },
            {
                "id": "FC2-49",
                "parent": "FC2-40",
                "text": "Lire à voix haute"
            },
            {
                "id": "FC2-50",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-51",
                "parent": "FC2-49",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-52",
                "parent": "FC2-39",
                "text": "Lire un texte adapté à son niveau de lecture avec une vitesse de 70 mots par minute."
            },
            {
                "id": "FC2-53",
                "parent": "FC2-39",
                "text": "Lire des textes narratifs, documentaires et prescriptifs en respectant tous les signes de ponctuation et les groupes de souffle."
            },
            {
                "id": "FC2-54",
                "parent": "FC2-39",
                "text": "Lire de manière expressive."
            },
            {
                "id": "FC2-55",
                "parent": "FC2-40",
                "text": "Comprendre un texte"
            },
            {
                "id": "FC2-56",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-57",
                "parent": "FC2-51",
                "text": "Dégager le sens global d'un texte lu, de façon autonome, à la suite d'une séance dédiée à la compréhension."
            },
            {
                "id": "FC2-58",
                "parent": "FC2-51",
                "text": "Développer des stratégies pour élucider le sens des mots et des expressions inconnus."
            },
            {
                "id": "FC2-59",
                "parent": "FC2-51",
                "text": "Se repérer dans la chaine anaphorique (qui relie un nom à sa ou ses reprise(s) pronominale(s) ou à d'autres noms de sens équivalent) et s'appuyer sur le sens du texte pour résoudre des ambigüités."
            },
            {
                "id": "FC2-60",
                "parent": "FC2-51",
                "text": "Comprendre ce qui est implicite dans le texte (inférences) dans des cas simples."
            },
            {
                "id": "FC2-61",
                "parent": "FC2-51",
                "text": "Justifier ses réponses par un retour au texte."
            },
            {
                "id": "FC2-62",
                "parent": "FC2-51",
                "text": "Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d'une quinzaine de lignes."
            },
            {
                "id": "FC2-63",
                "parent": "FC2-40",
                "text": "Devenir lecteur"
            },
            {
                "id": "FC2-64",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-65",
                "parent": "FC2-51",
                "text": "Lire 5 à 10 oeuvres complètes et variées issues du patrimoine et de la littérature de jeunesse (albums, romans, contes, fables, poèmes, pièces de théâtre et documentaires)."
            },
            {
                "id": "FC2-66",
                "parent": "FC2-51",
                "text": "Se familiariser aux différents genres et types de textes."
            },
            {
                "id": "FC2-67",
                "parent": "FC2-51",
                "text": "Faire preuve d'initiative dans ses lectures personnelles en empruntant des livres en fonction de ses gouts."
            },
            {
                "id": "FC2-68",
                "parent": "FC2-51",
                "text": "Relier ses lectures à son expérience personnelle, être en mesure d'établir des liens entre ses différentes lectures (mise en réseau)."
            },
            {
                "id": "FC2-69",
                "parent": "FC2-64",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "FC2-70",
                "parent": "FC2-69",
                "text": "Identifier les mots de manière de plus en plus aisée"
            },
            {
                "id": "FC2-71",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-72",
                "parent": "FC2-51",
                "text": "Avoir automatisé toutes les correspondances graphophonémiques (CGP)."
            },
            {
                "id": "FC2-73",
                "parent": "FC2-51",
                "text": "Lire un texte nouveau en s'appuyant sur un décodage rapide."
            },
            {
                "id": "FC2-74",
                "parent": "FC2-51",
                "text": "Automatiser la lecture des mots."
            },
            {
                "id": "FC2-75",
                "parent": "FC2-51",
                "text": "Repérer les lettres muettes et décoder les mots inconnus en conservant une vitesse de lecture correspondant aux objectifs de fin d'année."
            },
            {
                "id": "FC2-76",
                "parent": "FC2-69",
                "text": "Lire à voix haute"
            },
            {
                "id": "FC2-77",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-78",
                "parent": "FC2-51",
                "text": "Lire un texte adapté à son niveau de lecture avec une vitesse de 90 mots par minute."
            },
            {
                "id": "FC2-79",
                "parent": "FC2-51",
                "text": "Lire un texte en respectant l'ensemble des marques de ponctuation et les liaisons."
            },
            {
                "id": "FC2-80",
                "parent": "FC2-51",
                "text": "Manifester sa compréhension par une lecture expressive qui respecte la structure du texte, de la phrase et le sens."
            },
            {
                "id": "FC2-81",
                "parent": "FC2-69",
                "text": "Comprendre un texte"
            },
            {
                "id": "FC2-82",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-83",
                "parent": "FC2-51",
                "text": "Lire et dégager le sens d'un texte narratif, poétique, documentaire ou théâtral, lu en autonomie ou lu par un adulte en s'appuyant sur les caractéristiques de ces textes."
            },
            {
                "id": "FC2-84",
                "parent": "FC2-51",
                "text": "Adopter une posture active par rapport au vocabulaire inconnu."
            },
            {
                "id": "FC2-85",
                "parent": "FC2-51",
                "text": "Se repérer dans la chaine anaphorique (qui relie un nom à sa ou ses reprise(s) pronominale(s) ou à d'autres noms de sens équivalent) et s'appuyer sur le sens du texte pour résoudre des ambigüités."
            },
            {
                "id": "FC2-86",
                "parent": "FC2-51",
                "text": "Différencier le type narratif du type informatif et prescriptif."
            },
            {
                "id": "FC2-87",
                "parent": "FC2-51",
                "text": "Comprendre ce qui est implicite (inférences) en s'appuyant sur des indices explicites et sur ses propres connaissances."
            },
            {
                "id": "FC2-88",
                "parent": "FC2-51",
                "text": "Revenir au texte pour identifier et comprendre les éléments complexes."
            },
            {
                "id": "FC2-89",
                "parent": "FC2-51",
                "text": "Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d'une vingtaine de lignes."
            },
            {
                "id": "FC2-90",
                "parent": "FC2-69",
                "text": "Devenir lecteur"
            },
            {
                "id": "FC2-91",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-92",
                "parent": "FC2-51",
                "text": "Lire de manière autonome 5 à 10 oeuvres complètes et variées issues du patrimoine et de la littérature de jeunesse (albums, romans, contes, fables, poèmes, pièces de théâtre et documentaires)."
            },
            {
                "id": "FC2-93",
                "parent": "FC2-51",
                "text": "Relier ses lectures à son expérience personnelle, être en mesure d'établir des liens entre ses différentes lectures (mise en réseau)."
            },
            {
                "id": "FC2-94",
                "parent": "FC2-51",
                "text": "Fréquenter des lieux de lecture régulièrement et rencontrer des acteurs du livre."
            },
            {
                "id": "FC2-95",
                "parent": "FC2",
                "text": "Ecriture"
            },
            {
                "id": "FC2-96",
                "parent": "FC2-95",
                "text": "Cours préparatoire"
            },
            {
                "id": "FC2-97",
                "parent": "FC2-96",
                "text": "Apprendre à écrire en écriture cursive"
            },
            {
                "id": "FC2-98",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-99",
                "parent": "FC2-51",
                "text": "Apprendre à écrire en écriture cursive tous les graphèmes étudiés selon la progression en décodage."
            },
            {
                "id": "FC2-100",
                "parent": "FC2-51",
                "text": "Apprendre à les enchainer, avec fluidité, avec d'autres lettres dans des syllabes, mots, phrases."
            },
            {
                "id": "FC2-101",
                "parent": "FC2-96",
                "text": "Encoder puis écrire sous dictée"
            },
            {
                "id": "FC2-102",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-103",
                "parent": "FC2-101",
                "text": "Dès le début de l'année"
            },
            {
                "id": "FC2-104",
                "parent": "FC2-100",
                "text": "Encoder des syllabes simples puis des mots selon la progression des CGP."
            },
            {
                "id": "FC2-105",
                "parent": "FC2-101",
                "text": "Dès la fin de la 2e période"
            },
            {
                "id": "FC2-106",
                "parent": "FC2-104",
                "text": "crire des mots dictés avec des lettres muettes apprises (mettre en relation des morphogrammes lexicaux et grammaticaux)."
            },
            {
                "id": "FC2-107",
                "parent": "FC2-101",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-108",
                "parent": "FC2-104",
                "text": "crire sous la dictée des mots et des phrases."
            },
            {
                "id": "FC2-109",
                "parent": "FC2-96",
                "text": "Copier et acquérir des stratégies de copie"
            },
            {
                "id": "FC2-110",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-111",
                "parent": "FC2-109",
                "text": "Dès le début de l'année"
            },
            {
                "id": "FC2-112",
                "parent": "FC2-100",
                "text": "Copier des syllabes simples puis des mots avec lettres muettes."
            },
            {
                "id": "FC2-113",
                "parent": "FC2-109",
                "text": "Dès la fin de la période 1"
            },
            {
                "id": "FC2-114",
                "parent": "FC2-100",
                "text": "Copier une phrase en lien avec les 12/15 correspondances graphophonémiques étudiées."
            },
            {
                "id": "FC2-115",
                "parent": "FC2-100",
                "text": "Commencer à verbaliser et à utiliser des stratégies de copie pour dépasser la copie lettre à lettre : prise d'indices, mémorisation de mots ou groupes de mots."
            },
            {
                "id": "FC2-116",
                "parent": "FC2-100",
                "text": "Commencer à savoir se relire après copie."
            },
            {
                "id": "FC2-117",
                "parent": "FC2-109",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-118",
                "parent": "FC2-100",
                "text": "Copier trois ou quatre phrases sans erreur et de façon lisible."
            },
            {
                "id": "FC2-119",
                "parent": "FC2-96",
                "text": "Produire des écrits"
            },
            {
                "id": "FC2-120",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-121",
                "parent": "FC2-119",
                "text": "Dès le début de l'année"
            },
            {
                "id": "FC2-122",
                "parent": "FC2-118",
                "text": "crire des graphèmes, des syllabes, des mots puis quelques phrases avec l'aide du professeur à partir des mots connus et déchiffrés. Les activités de dictées à l'adulte sont poursuivies."
            },
            {
                "id": "FC2-123",
                "parent": "FC2-119",
                "text": "Dès la 2e période"
            },
            {
                "id": "FC2-124",
                "parent": "FC2-100",
                "text": "Produire des écrits courts porteurs de sens, d'une à cinq lignes, en articulation avec l'apprentissage de la lecture."
            },
            {
                "id": "FC2-125",
                "parent": "FC2-100",
                "text": "S'appuyer sur les textes de lecture pour les transformer sur quelques points seulement (écrire à la façon de, ajouter un épisode, etc.)."
            },
            {
                "id": "FC2-126",
                "parent": "FC2-119",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-127",
                "parent": "FC2-100",
                "text": "Produire des écrits courts porteurs de sens d'une à cinq lignes en articulation avec l'apprentissage de la lecture."
            },
            {
                "id": "FC2-128",
                "parent": "FC2-100",
                "text": "Commencer à acquérir une méthodologie de production écrite : planification, mise en mots avec vigilance orthographique, relectures et révisions."
            },
            {
                "id": "FC2-129",
                "parent": "FC2-100",
                "text": "Repérer les dysfonctionnements de son texte par la relecture à voix haute du professeur ou grâce à des outils d'aide construits à cet effet."
            },
            {
                "id": "FC2-130",
                "parent": "FC2-120",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "FC2-131",
                "parent": "FC2-130",
                "text": "Apprendre à écrire en écriture cursive"
            },
            {
                "id": "FC2-132",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-133",
                "parent": "FC2-131",
                "text": "Dès la période 1"
            },
            {
                "id": "FC2-134",
                "parent": "FC2-100",
                "text": "Mémoriser le tracé normé et la transcription de toutes les lettres minuscules scriptes en lettres minuscules cursives."
            },
            {
                "id": "FC2-135",
                "parent": "FC2-100",
                "text": "partir de la période 2"
            },
            {
                "id": "FC2-136",
                "parent": "FC2-100",
                "text": "Reconnaitre les lettres dans les quatre écritures : minuscules (scripte et cursive), majuscules (scripte ou cursive)."
            },
            {
                "id": "FC2-137",
                "parent": "FC2-100",
                "text": "Apprendre le tracé normé des lettres majuscules cursives par familles de gestes."
            },
            {
                "id": "FC2-138",
                "parent": "FC2-130",
                "text": "Encoder puis écrire sous dictée"
            },
            {
                "id": "FC2-139",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-140",
                "parent": "FC2-133",
                "text": "Orthographier correctement les mots fréquents, réguliers puis irréguliers."
            },
            {
                "id": "FC2-141",
                "parent": "FC2-133",
                "text": "Réaliser des accords en genre et en nombre dans le groupe nominal (article, nom, adjectif) et dans le groupe verbal (marque de pluriel des verbes = nt)."
            },
            {
                "id": "FC2-142",
                "parent": "FC2-130",
                "text": "Copier et acquérir des stratégies de copie"
            },
            {
                "id": "FC2-143",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-144",
                "parent": "FC2-133",
                "text": "Automatiser le geste d'écriture cursive par la copie de textes en temps limité."
            },
            {
                "id": "FC2-145",
                "parent": "FC2-133",
                "text": "Acquérir des stratégies de copie et en mesurer l'efficacité."
            },
            {
                "id": "FC2-146",
                "parent": "FC2-145",
                "text": "l'issue de la période 1"
            },
            {
                "id": "FC2-147",
                "parent": "FC2-145",
                "text": "Copier quatre à cinq phrases courtes."
            },
            {
                "id": "FC2-148",
                "parent": "FC2-145",
                "text": "partir de la période 3"
            },
            {
                "id": "FC2-149",
                "parent": "FC2-145",
                "text": "Copier cinq ou six lignes sans erreur."
            },
            {
                "id": "FC2-150",
                "parent": "FC2-145",
                "text": "la fin de l'année"
            },
            {
                "id": "FC2-151",
                "parent": "FC2-145",
                "text": "Recopier sans effort une dizaine de lignes en respectant la ponctuation et la mise en page."
            },
            {
                "id": "FC2-152",
                "parent": "FC2-130",
                "text": "Produire des écrits"
            },
            {
                "id": "FC2-153",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-154",
                "parent": "FC2-152",
                "text": "Dès les premières semaines"
            },
            {
                "id": "FC2-155",
                "parent": "FC2-145",
                "text": "Rédiger une phrase simple à partir d'une phrase prototypique, en changeant un puis plusieurs mots."
            },
            {
                "id": "FC2-156",
                "parent": "FC2-152",
                "text": "Dès la période 1"
            },
            {
                "id": "FC2-157",
                "parent": "FC2-155",
                "text": "crire un texte court de une à trois phrases."
            },
            {
                "id": "FC2-158",
                "parent": "FC2-152",
                "text": "Au cours des périodes 1 à 5"
            },
            {
                "id": "FC2-159",
                "parent": "FC2-145",
                "text": "Insérer des connecteurs pour rendre cohérent l'enchainement de plusieurs phrases."
            },
            {
                "id": "FC2-160",
                "parent": "FC2-145",
                "text": "Retravailler un texte (issu de lecture et/ou d'écriture) en fonction d'une ou deux contraintes d'écriture."
            },
            {
                "id": "FC2-161",
                "parent": "FC2-145",
                "text": "Continuer à acquérir une méthodologie de production écrite : planification, mise en mots avec vigilance. orthographique, révision après retours immédiats du professeur."
            },
            {
                "id": "FC2-162",
                "parent": "FC2-152",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-163",
                "parent": "FC2-161",
                "text": "crire un texte de six ou sept phrases maximum en assurant la cohérence syntaxique et logique du texte produit."
            },
            {
                "id": "FC2-164",
                "parent": "FC2-153",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "FC2-165",
                "parent": "FC2-164",
                "text": "Apprendre à écrire en écriture cursive"
            },
            {
                "id": "FC2-166",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-167",
                "parent": "FC2-165",
                "text": "Dès la période 1"
            },
            {
                "id": "FC2-168",
                "parent": "FC2-145",
                "text": "Automatiser l'écriture de toutes les lettres minuscules et majuscules en cursive."
            },
            {
                "id": "FC2-169",
                "parent": "FC2-164",
                "text": "Encoder puis écrire sous dictée"
            },
            {
                "id": "FC2-170",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-171",
                "parent": "FC2-145",
                "text": "la fin de l'année"
            },
            {
                "id": "FC2-172",
                "parent": "FC2-145",
                "text": "Orthographier correctement les mots fréquents, réguliers et irréguliers et des phrases selon les accords étudiés dans le cadre de dictées."
            },
            {
                "id": "FC2-173",
                "parent": "FC2-164",
                "text": "Copier et acquérir des stratégies de copie"
            },
            {
                "id": "FC2-174",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-175",
                "parent": "FC2-173",
                "text": "En fin d'année"
            },
            {
                "id": "FC2-176",
                "parent": "FC2-145",
                "text": "Copier une dizaine de lignes sans erreur en conjuguant vitesse et exactitude et en respectant les mises en page complexes."
            },
            {
                "id": "FC2-177",
                "parent": "FC2-164",
                "text": "Produire des écrits"
            },
            {
                "id": "FC2-178",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-179",
                "parent": "FC2-175",
                "text": "Développer tout au long de l'année les compétences qui lui permettront en fin d'année :"
            },
            {
                "id": "FC2-180",
                "parent": "FC2-175",
                "text": "d'écrire pour transmettre un message, une émotion, une information, etc., à un destinataire ;"
            },
            {
                "id": "FC2-181",
                "parent": "FC2-175",
                "text": "de rédiger quelques phrases qui permettent d'entrainer les automatismes appris en grammaire et orthographe ;"
            },
            {
                "id": "FC2-182",
                "parent": "FC2-175",
                "text": "d'écrire un texte d'une dizaine de lignes de différents types et relevant des différents enseignements : respecter la syntaxe, les règles orthographiques étudiées, réemployer un lexique précis et prendre en compte des contraintes d'écriture ;"
            },
            {
                "id": "FC2-183",
                "parent": "FC2-175",
                "text": "de relire son texte méthodiquement."
            },
            {
                "id": "FC2-184",
                "parent": "FC2-178",
                "text": "Cours préparatoire"
            },
            {
                "id": "FC2-185",
                "parent": "FC2-177",
                "text": "couter pour comprendre"
            },
            {
                "id": "FC2-186",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-187",
                "parent": "FC2-185",
                "text": "Comprendre un message entendu de quelques minutes et mémoriser quelques informations importantes."
            },
            {
                "id": "FC2-188",
                "parent": "FC2-184",
                "text": "Dire pour être compris"
            },
            {
                "id": "FC2-189",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-190",
                "parent": "FC2-185",
                "text": "Mener une brève production orale pour rapporter, raconter, décrire ou expliquer, en utilisant quelques organisateurs du discours et en mobilisant le lexique appris."
            },
            {
                "id": "FC2-191",
                "parent": "FC2-185",
                "text": "S'écouter pour progresser et proposer des reformulations."
            },
            {
                "id": "FC2-192",
                "parent": "FC2-185",
                "text": "Oraliser un texte mémorisé ou préparé en tenant compte de son auditoire."
            },
            {
                "id": "FC2-193",
                "parent": "FC2-184",
                "text": "Participer à des échanges"
            },
            {
                "id": "FC2-194",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-195",
                "parent": "FC2-185",
                "text": "Participer aux échanges en respectant les règles, en écoutant les autres et en donnant son avis."
            },
            {
                "id": "FC2-196",
                "parent": "FC2-185",
                "text": "Prendre conscience des écarts de niveau de langue selon les situations de communication."
            },
            {
                "id": "FC2-197",
                "parent": "FC2-194",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "FC2-198",
                "parent": "FC2-193",
                "text": "couter pour comprendre"
            },
            {
                "id": "FC2-199",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-200",
                "parent": "FC2-198",
                "text": "Maintenir une attention active pendant quelques minutes pour repérer, mémoriser, classer ou ordonner les informations importantes entendues à l'oral."
            },
            {
                "id": "FC2-201",
                "parent": "FC2-197",
                "text": "Dire pour être compris"
            },
            {
                "id": "FC2-202",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-203",
                "parent": "FC2-198",
                "text": "Utiliser à l'oral l'ensemble des temps verbaux pour raconter, décrire, expliquer, comparer ou exposer."
            },
            {
                "id": "FC2-204",
                "parent": "FC2-198",
                "text": "Utiliser les critères définis pour évaluer sa prestation ou celle des autres et progresser dans la production de différents types de discours."
            },
            {
                "id": "FC2-205",
                "parent": "FC2-197",
                "text": "Participer à des échanges"
            },
            {
                "id": "FC2-206",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-207",
                "parent": "FC2-198",
                "text": "Respecter le propos au cours des échanges au sein d'un groupe."
            },
            {
                "id": "FC2-208",
                "parent": "FC2-198",
                "text": "Adapter le registre de langue utilisé (familier, courant, soutenu) à la situation de communication proposée : conversation entre pairs, dialogue avec un adulte connu, une personnalité inconnue, etc."
            },
            {
                "id": "FC2-209",
                "parent": "FC2-206",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "FC2-210",
                "parent": "FC2-205",
                "text": "couter pour comprendre"
            },
            {
                "id": "FC2-211",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-212",
                "parent": "FC2-210",
                "text": "Repérer, mémoriser et relier entre elles plusieurs informations importantes pour construire la cohérence d'un message entendu de plus en plus long et complexe (5 minutes maximum), en évaluant son degré de compréhension."
            },
            {
                "id": "FC2-213",
                "parent": "FC2-209",
                "text": "Dire pour être compris"
            },
            {
                "id": "FC2-214",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-215",
                "parent": "FC2-210",
                "text": "Mener une production orale de plus en plus longue et structurée pour raconter, expliquer, argumenter, justifier."
            },
            {
                "id": "FC2-216",
                "parent": "FC2-210",
                "text": "Maintenir l'intérêt de son auditoire lors des différentes prestations orales."
            },
            {
                "id": "FC2-217",
                "parent": "FC2-209",
                "text": "Participer à des échanges"
            },
            {
                "id": "FC2-218",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-219",
                "parent": "FC2-210",
                "text": "Tenir compte de ce qui a déjà été dit lors des interventions au sein d'un groupe."
            },
            {
                "id": "FC2-220",
                "parent": "FC2-210",
                "text": "Utiliser un registre de langue et adopter des postures adaptées aux situations proposées (jeux de rôles)."
            },
            {
                "id": "FC2-221",
                "parent": "FC2-218",
                "text": "Cours préparatoire"
            },
            {
                "id": "FC2-222",
                "parent": "FC2-221",
                "text": "Enrichir son vocabulaire dans tous les enseignements"
            },
            {
                "id": "FC2-223",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-224",
                "parent": "FC2-210",
                "text": "Enrichir en contexte le vocabulaire appris au cycle 1."
            },
            {
                "id": "FC2-225",
                "parent": "FC2-224",
                "text": "tre sensible, sans en apprendre les concepts, à la polysémie et à la différence entre sens propre et sens figuré."
            },
            {
                "id": "FC2-226",
                "parent": "FC2-210",
                "text": "Commencer à mobiliser l'ordre alphabétique pour utiliser un dictionnaire adapté (papier ou numérique)."
            },
            {
                "id": "FC2-227",
                "parent": "FC2-222",
                "text": "tablir des relations entre les mots"
            },
            {
                "id": "FC2-228",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-229",
                "parent": "FC2-227",
                "text": "Constituer des répertoires de mots par thème, par classe grammaticale, par famille de mots, par analogies morphologiques."
            },
            {
                "id": "FC2-230",
                "parent": "FC2-227",
                "text": "Savoir proposer et justifier une catégorisation du corpus de mots étudié."
            },
            {
                "id": "FC2-231",
                "parent": "FC2-227",
                "text": "Savoir trouver des synonymes et des antonymes."
            },
            {
                "id": "FC2-232",
                "parent": "FC2-221",
                "text": "Réemployer le vocabulaire étudié"
            },
            {
                "id": "FC2-233",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-234",
                "parent": "FC2-227",
                "text": "Réemployer et mémoriser le vocabulaire appris en maternelle."
            },
            {
                "id": "FC2-235",
                "parent": "FC2-227",
                "text": "Réemployer et mémoriser les expressions et les mots appris en fonction de contraintes de production orale ou écrite."
            },
            {
                "id": "FC2-236",
                "parent": "FC2-227",
                "text": "Percevoir la différence entre deux niveaux de langue et choisir le plus adapté à la situation."
            },
            {
                "id": "FC2-237",
                "parent": "FC2-221",
                "text": "Mémoriser l'orthographe lexicale"
            },
            {
                "id": "FC2-238",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-239",
                "parent": "FC2-227",
                "text": "Mémoriser l'orthographe des mots réguliers fréquemment rencontrés et du lexique le plus couramment employé et pouvoir les écrire sous la dictée, en lien avec les correspondances graphophonémiques (CGP) étudiées."
            },
            {
                "id": "FC2-240",
                "parent": "FC2-227",
                "text": "Identifier et nommer les accents."
            },
            {
                "id": "FC2-241",
                "parent": "FC2-227",
                "text": "Connaitre la valeur sonore de certaines lettres (s – c – g) et la composition de certains graphèmes selon la lettre qui suit (an/am, en/em, on/om, in/im), en fonction du contexte et dans des mots fréquemment rencontrés."
            },
            {
                "id": "FC2-242",
                "parent": "FC2-241",
                "text": "tre capable de comprendre la présence d'une lettre muette finale à l'aide d'un mot de la même famille : chat/chaton, gros/grossir, etc."
            },
            {
                "id": "FC2-243",
                "parent": "FC2-238",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "FC2-244",
                "parent": "FC2-243",
                "text": "Enrichir son vocabulaire dans toutes les disciplines"
            },
            {
                "id": "FC2-245",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-246",
                "parent": "FC2-227",
                "text": "Enrichir les répertoires constitués au CP en y ajoutant notamment des expressions ou locutions."
            },
            {
                "id": "FC2-247",
                "parent": "FC2-227",
                "text": "Automatiser l'utilisation de différentes formulations, associées à un même réseau, en contexte."
            },
            {
                "id": "FC2-248",
                "parent": "FC2-227",
                "text": "S'appuyer sur la morphologie des mots pour en trouver le sens."
            },
            {
                "id": "FC2-249",
                "parent": "FC2-227",
                "text": "Prendre l'habitude de consulter des articles de dictionnaire adapté."
            },
            {
                "id": "FC2-250",
                "parent": "FC2-244",
                "text": "tablir des relations entre les mots"
            },
            {
                "id": "FC2-251",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-252",
                "parent": "FC2-250",
                "text": "Percevoir de grandes catégories et hiérarchiser les termes génériques, de base et spécifiques."
            },
            {
                "id": "FC2-253",
                "parent": "FC2-250",
                "text": "Percevoir les niveaux de langue familier, courant et soutenu."
            },
            {
                "id": "FC2-254",
                "parent": "FC2-250",
                "text": "Comprendre la différence entre sens propre/sens figuré."
            },
            {
                "id": "FC2-255",
                "parent": "FC2-250",
                "text": "Trier et apparier les mots et leurs dérivés en fonction des préfixes et suffixes identifiés."
            },
            {
                "id": "FC2-256",
                "parent": "FC2-243",
                "text": "Réemployer le vocabulaire étudié"
            },
            {
                "id": "FC2-257",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-258",
                "parent": "FC2-250",
                "text": "Mobiliser les mots rencontrés en contexte en fonction des lectures et des activités conduites pour mieux parler, mieux comprendre et mieux écrire."
            },
            {
                "id": "FC2-259",
                "parent": "FC2-250",
                "text": "Utiliser les relations établies entre les mots depuis le cycle 1 (champ lexical, classe grammaticale, morphologie, niveau de langue) pour varier et adapter son expression."
            },
            {
                "id": "FC2-260",
                "parent": "FC2-243",
                "text": "Mémoriser l'orthographe des mots"
            },
            {
                "id": "FC2-261",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-262",
                "parent": "FC2-250",
                "text": "Mémoriser l'orthographe des mots réguliers et irréguliers fréquemment rencontrés et du lexique le plus couramment employé."
            },
            {
                "id": "FC2-263",
                "parent": "FC2-250",
                "text": "Tenir compte des accents."
            },
            {
                "id": "FC2-264",
                "parent": "FC2-250",
                "text": "Classer par analogie et mémoriser les mots les plus fréquents comportant des graphèmes à prononciation variable : s prononcé –ss ou –z, c prononcé –ss ou –k, g prononcé –j ou –g."
            },
            {
                "id": "FC2-265",
                "parent": "FC2-264",
                "text": "tre capable d'anticiper une lettre muette finale à l'aide d'un mot de la même famille : blanc/blanche, sang/sanguin, etc."
            },
            {
                "id": "FC2-266",
                "parent": "FC2-261",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "FC2-267",
                "parent": "FC2-266",
                "text": "Enrichir son vocabulaire dans toutes les disciplines"
            },
            {
                "id": "FC2-268",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-269",
                "parent": "FC2-250",
                "text": "Enrichir les répertoires constitués au CP et au CE1 en y ajoutant notamment des expressions ou des locutions."
            },
            {
                "id": "FC2-270",
                "parent": "FC2-250",
                "text": "Automatiser l'utilisation de différentes formulations, associées à un réseau, en contexte."
            },
            {
                "id": "FC2-271",
                "parent": "FC2-250",
                "text": "Comprendre le lien sémantique entre sens propre et sens figuré dans les cas les plus fréquents."
            },
            {
                "id": "FC2-272",
                "parent": "FC2-250",
                "text": "S'appuyer sur la morphologie des mots pour en trouver le sens."
            },
            {
                "id": "FC2-273",
                "parent": "FC2-250",
                "text": "Consulter avec aisance des articles de dictionnaire adapté pour y vérifier le sens supposé de mots rencontrés."
            },
            {
                "id": "FC2-274",
                "parent": "FC2-267",
                "text": "tablir des relations entre les mots"
            },
            {
                "id": "FC2-275",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-276",
                "parent": "FC2-274",
                "text": "Enrichir les collections constituées au début du cycle avec des mots, des expressions et des associations fréquentes."
            },
            {
                "id": "FC2-277",
                "parent": "FC2-274",
                "text": "Percevoir de grandes catégories et hiérarchiser les termes génériques de base et spécifiques."
            },
            {
                "id": "FC2-278",
                "parent": "FC2-274",
                "text": "Savoir utiliser les niveaux de langue (familier, courant et soutenu) en fonction des situations et des interlocuteurs."
            },
            {
                "id": "FC2-279",
                "parent": "FC2-274",
                "text": "Se constituer un répertoire lexical personnel qui pourra forger l'autonomie visée au cycle 3."
            },
            {
                "id": "FC2-280",
                "parent": "FC2-274",
                "text": "Trier et apparier des mots et leurs dérivés en fonction des préfixes et suffixes identifiés."
            },
            {
                "id": "FC2-281",
                "parent": "FC2-266",
                "text": "Réemployer le vocabulaire étudié"
            },
            {
                "id": "FC2-282",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-283",
                "parent": "FC2-274",
                "text": "Employer à bon escient et rigoureusement les mots étudiés, en référence à leur contexte d'emploi et leur éventuelle polysémie."
            },
            {
                "id": "FC2-284",
                "parent": "FC2-274",
                "text": "Comprendre la différence entre sens propre/sens figuré."
            },
            {
                "id": "FC2-285",
                "parent": "FC2-274",
                "text": "Changer de niveau de langue selon les situations."
            },
            {
                "id": "FC2-286",
                "parent": "FC2-274",
                "text": "Automatiser la restitution des mots d'un corpus étudié (fluence verbale)."
            },
            {
                "id": "FC2-287",
                "parent": "FC2-266",
                "text": "Mémoriser l'orthographe des mots"
            },
            {
                "id": "FC2-288",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-289",
                "parent": "FC2-286",
                "text": "crire correctement sous la dictée les mots réguliers et irréguliers fréquemment rencontrés."
            },
            {
                "id": "FC2-290",
                "parent": "FC2-274",
                "text": "Tenir compte des accents."
            },
            {
                "id": "FC2-291",
                "parent": "FC2-274",
                "text": "S'appuyer sur des critères morphologiques (radical, préfixe et suffixe) et analogiques pour orthographier correctement les mots."
            },
            {
                "id": "FC2-292",
                "parent": "FC2-288",
                "text": "Cours préparatoire"
            },
            {
                "id": "FC2-293",
                "parent": "FC2-292",
                "text": "Se repérer dans la phrase simple"
            },
            {
                "id": "FC2-294",
                "parent": "FC2",
                "text": "Objectifs"
            },
            {
                "id": "FC2-295",
                "parent": "FC2-274",
                "text": "S'approprier progressivement la notion de phrase simple et ses trois marqueurs essentiels : majuscule initiale, ponctuation finale forte et sens."
            },
            {
                "id": "FC2-296",
                "parent": "FC2-274",
                "text": "Comprendre que certains éléments (sujet/verbe et déterminants/noms/adjectifs) fonctionnent ensemble et constituent un système."
            },
            {
                "id": "FC2-297",
                "parent": "FC2-274",
                "text": "S'appuyer sur la ponctuation pour reconnaitre les trois types de phrases (déclarative, interrogative et impérative)."
            },
            {
                "id": "FC2-298",
                "parent": "FC2-274",
                "text": "Reconnaitre les formes négative et exclamative."
            },
            {
                "id": "FC2-299",
                "parent": "FC2-274",
                "text": "Constituer des corpus par classe de mots : noms, verbes, déterminants, adjectifs, pronoms personnels."
            },
            {
                "id": "FC2-300",
                "parent": "FC2-292",
                "text": "Découvrir, comprendre et mettre en oeuvre l'orthographe grammaticale"
            },
            {
                "id": "FC2-301",
                "parent": "FC2",
                "text": "Objectifs"
            },
            {
                "id": "FC2-302",
                "parent": "FC2-274",
                "text": "Comprendre les notions de masculin et de féminin."
            },
            {
                "id": "FC2-303",
                "parent": "FC2-274",
                "text": "Comprendre les notions de singulier et de pluriel (plusieurs, plus qu'un)."
            },
            {
                "id": "FC2-304",
                "parent": "FC2-274",
                "text": "Se familiariser avec la notion de « chaine d'accords » (déterminant/nom/adjectif) en repérant et en identifiant les régularités des marques de genre et de nombre."
            },
            {
                "id": "FC2-305",
                "parent": "FC2-274",
                "text": "S'initier à l'identification de la relation sujet-verbe à partir du sens et de l'observation des effets des transformations liées aux temps et aux personnes."
            },
            {
                "id": "FC2-306",
                "parent": "FC2-274",
                "text": "Observer les différentes formes verbales fréquentes et régulières."
            },
            {
                "id": "FC2-307",
                "parent": "FC2-274",
                "text": "Apprendre à conjuguer être et avoir au présent de l'indicatif et commencer à les mobiliser à l'écrit."
            },
            {
                "id": "FC2-308",
                "parent": "FC2-301",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "FC2-309",
                "parent": "FC2-308",
                "text": "Se repérer dans la phrase simple"
            },
            {
                "id": "FC2-310",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-311",
                "parent": "FC2-274",
                "text": "Identifier la phrase simple, en distinguer les principaux constituants et les nommer : groupe sujet (GS), verbe et compléments sans distinguer ces derniers entre eux."
            },
            {
                "id": "FC2-312",
                "parent": "FC2-274",
                "text": "Reconnaitre et utiliser les trois types de phrases, en lien avec la ponctuation : déclarative, interrogative et impérative."
            },
            {
                "id": "FC2-313",
                "parent": "FC2-274",
                "text": "Reconnaitre les formes négatives et exclamatives et savoir effectuer des transformations."
            },
            {
                "id": "FC2-314",
                "parent": "FC2-274",
                "text": "Différencier et nommer les principales classes de mots : le déterminant, le nom commun, le nom propre, l'adjectif, le verbe, le pronom personnel sujet."
            },
            {
                "id": "FC2-315",
                "parent": "FC2-308",
                "text": "Découvrir, comprendre et mettre en oeuvre l'orthographe grammaticale"
            },
            {
                "id": "FC2-316",
                "parent": "FC2",
                "text": "Objectifs"
            },
            {
                "id": "FC2-317",
                "parent": "FC2-274",
                "text": "Reconnaitre le GN (déterminant/nom/adjectif) et, en écoutant des transformations de phrases à l'oral puis en les observant à l'écrit, comprendre le lien entre le déterminant, le nom et l'adjectif dans la « chaine d'accords »."
            },
            {
                "id": "FC2-318",
                "parent": "FC2-274",
                "text": "Identifier la relation sujet-verbe à partir de l'observation des effets des transformations liées au changement de temps et de personne dans des situations simples (groupe sujet + verbe)."
            },
            {
                "id": "FC2-319",
                "parent": "FC2-274",
                "text": "Identifier le radical et la terminaison d'un verbe du premier groupe conjugué et trouver son infinitif."
            },
            {
                "id": "FC2-320",
                "parent": "FC2-274",
                "text": "Apprendre à conjuguer au présent, à l'imparfait, au futur puis au passé composé de l'indicatif être et avoir et les verbes du premier groupe."
            },
            {
                "id": "FC2-321",
                "parent": "FC2-316",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "FC2-322",
                "parent": "FC2-321",
                "text": "Se repérer dans la phrase simple"
            },
            {
                "id": "FC2-323",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-324",
                "parent": "FC2-274",
                "text": "Identifier la phrase simple et reconnaitre ses principaux constituants : le groupe sujet, le verbe et les compléments sans distinguer ces derniers entre eux."
            },
            {
                "id": "FC2-325",
                "parent": "FC2-274",
                "text": "Reconnaitre et produire les trois types de phrases : déclarative, interrogative et impérative."
            },
            {
                "id": "FC2-326",
                "parent": "FC2-274",
                "text": "Reconnaitre et produire les formes négative et exclamative."
            },
            {
                "id": "FC2-327",
                "parent": "FC2-274",
                "text": "Différencier et nommer les principales classes de mots : le déterminant, le nom commun, le nom propre, l'adjectif, le verbe, le pronom personnel sujet et l'adverbe."
            },
            {
                "id": "FC2-328",
                "parent": "FC2-274",
                "text": "Utiliser la ponctuation de fin de phrase (. ! ?) et reconnaitre les marques du discours rapporté (« … »)."
            },
            {
                "id": "FC2-329",
                "parent": "FC2-321",
                "text": "Découvrir, comprendre et mettre en oeuvre l'orthographe grammaticale"
            },
            {
                "id": "FC2-330",
                "parent": "FC2",
                "text": "Objectifs d'apprentissage"
            },
            {
                "id": "FC2-331",
                "parent": "FC2-274",
                "text": "Repérer, comprendre et mettre en oeuvre les marques d'accord au sein du groupe nominal."
            },
            {
                "id": "FC2-332",
                "parent": "FC2-274",
                "text": "Identifier, dans des situations simples, la relation sujet-verbe."
            },
            {
                "id": "FC2-333",
                "parent": "FC2-274",
                "text": "Apprendre à conjuguer au présent, à l'imparfait, au futur et au passé composé de l'indicatif être et avoir, les verbes du premier groupe et les verbes irréguliers du 3e groupe (faire, aller, dire, venir, pouvoir, voir, vouloir, prendre)."
            },
            {
                "id": "FC2-334",
                "parent": "FC2-274",
                "text": "Identifier le radical et la terminaison d'un verbe conjugué au programme et trouver son infinitif."
            },

            {
                "id": "FC3",
                "parent": "F",
                "text": "Cycle 3"
            },
            {
                "id": "FC3-0",
                "parent": "FC3",
                "text": "Lecture"
            },
            {
                "id": "FC3-1",
                "parent": "FC3-0",
                "text": "Cours moyen première année"
            },
            {
                "id": "FC3-2",
                "parent": "FC3-1",
                "text": "Lire avec fluidité "
            },
            {
                "id": "FC3-3",
                "parent": "FC3-2",
                "text": "Lire sans effort un texte d'une page silencieusement ou à voix haute "
            },
            {
                "id": "FC3-4",
                "parent": "FC3-2",
                "text": "Lire à voix haute un texte court, après préparation, sans confondre les graphèmes, même complexes et en tenant compte des marques de ponctuation "
            },
            {
                "id": "FC3-5",
                "parent": "FC3-2",
                "text": "Mémoriser de plus en plus de mots fréquents et irréguliers "
            },
            {
                "id": "FC3-6",
                "parent": "FC3-2",
                "text": "Lire correctement en ciblant 110 mots par minute en moyenne"
            },
            {
                "id": "FC3-7",
                "parent": "FC3-1",
                "text": "Lire à voix haute avec expressivité "
            },
            {
                "id": "FC3-8",
                "parent": "FC3-7",
                "text": "Lire à voix haute, avec aisance et expressivité, un texte court travaillé en amont "
            },
            {
                "id": "FC3-9",
                "parent": "FC3-7",
                "text": "Proposer une lecture avec un rythme fluide et régulier qui respecte la ponctuation et les groupes de sens pour faciliter la compréhension de l'auditoire "
            },
            {
                "id": "FC3-10",
                "parent": "FC3-7",
                "text": "Gérer l'intensité de sa voix (volume, débit)"
            },
            {
                "id": "FC3-11",
                "parent": "FC3-1",
                "text": "Lire et comprendre seul des textes, des documents et des images "
            },
            {
                "id": "FC3-12",
                "parent": "FC3-11",
                "text": "Développer des stratégies de compréhension "
            },
            {
                "id": "FC3-13",
                "parent": "FC3-11",
                "text": "Repérer, dans un texte, les informations explicites et pointer des informations implicites "
            },
            {
                "id": "FC3-14",
                "parent": "FC3-11",
                "text": "Distinguer, par la mise en page et les caractéristiques d'écriture spécifiques, un extrait de théâtre, un poème, un texte narratif"
            },
            {
                "id": "FC3-15",
                "parent": "FC3-1",
                "text": "Lire et comprendre des textes, des documents et des images pour apprendre dans toutes les disciplines "
            },
            {
                "id": "FC3-16",
                "parent": "FC3-15",
                "text": "Donner la nature et la source d'un document "
            },
            {
                "id": "FC3-17",
                "parent": "FC3-15",
                "text": "Identifier les différents genres représentés et repérer leurs caractéristiques majeures "
            },
            {
                "id": "FC3-18",
                "parent": "FC3-15",
                "text": "Trouver dans des documents simples les réponses à des questions "
            },
            {
                "id": "FC3-19",
                "parent": "FC3-15",
                "text": "Découvrir des documents composites et y repérer des informations grâce à un questionnement"
            },
            {
                "id": "FC3-20",
                "parent": "FC3-1",
                "text": "Lire une oeuvre et se l'approprier "
            },
            {
                "id": "FC3-21",
                "parent": "FC3-20",
                "text": "Mettre en relation le texte lu avec une oeuvre lue en classe afin de garder la mémoire des livres lus "
            },
            {
                "id": "FC3-22",
                "parent": "FC3-20",
                "text": "Créer des liens entre le texte lu et ses expériences personnelles, ses connaissances "
            },
            {
                "id": "FC3-23",
                "parent": "FC3-20",
                "text": "Varier les expériences de lecture (genres, formats, thèmes, etc.) afin de développer le plaisir de lire "
            },
            {
                "id": "FC3-24",
                "parent": "FC3-20",
                "text": "S'engager et persévérer dans sa lecture"
            },
            {
                "id": "FC3-25",
                "parent": "FC3-0",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "FC3-26",
                "parent": "FC3-25",
                "text": "Lire avec fluidité "
            },
            {
                "id": "FC3-27",
                "parent": "FC3-26",
                "text": "Poursuivre l'entraînement à la lecture à voix haute et à la lecture silencieuse "
            },
            {
                "id": "FC3-28",
                "parent": "FC3-26",
                "text": "Lire à voix haute, après préparation, un texte long en tenant compte des marques de ponctuation, des liaisons et des unités syntaxiques "
            },
            {
                "id": "FC3-29",
                "parent": "FC3-26",
                "text": "Lire correctement en ciblant 120 mots par minute en moyenne"
            },
            {
                "id": "FC3-30",
                "parent": "FC3-25",
                "text": "Lire à voix haute avec expressivité "
            },
            {
                "id": "FC3-31",
                "parent": "FC3-30",
                "text": "Lire à voix haute, avec aisance et expressivité, un texte travaillé en amont, en respectant l'articulation du texte "
            },
            {
                "id": "FC3-32",
                "parent": "FC3-30",
                "text": "Travailler la mise en voix d'un texte (intonation, effets) "
            },
            {
                "id": "FC3-33",
                "parent": "FC3-30",
                "text": "S'entraîner à faire vivre le texte et prendre du plaisir à le lire"
            },
            {
                "id": "FC3-34",
                "parent": "FC3-25",
                "text": "Lire et comprendre seul des textes, des documents et des images "
            },
            {
                "id": "FC3-35",
                "parent": "FC3-34",
                "text": "Poursuivre son apprentissage de lecteur autonome face à des textes de plus en plus longs et de plus en plus complexes "
            },
            {
                "id": "FC3-36",
                "parent": "FC3-34",
                "text": "Restituer l'essentiel d'un texte qui contient des informations explicites et des informations implicites "
            },
            {
                "id": "FC3-37",
                "parent": "FC3-34",
                "text": "Reconnaître et nommer les principaux genres littéraires à l'aide de critères travaillés en classe"
            },
            {
                "id": "FC3-38",
                "parent": "FC3-25",
                "text": "Lire et comprendre des textes, des documents et des images pour apprendre dans toutes les disciplines "
            },
            {
                "id": "FC3-39",
                "parent": "FC3-38",
                "text": "Reconnaître et nommer les caractéristiques des différents éléments d'un document composite "
            },
            {
                "id": "FC3-40",
                "parent": "FC3-38",
                "text": "Rapprocher deux documents convergents, de genres différents, pour repérer et compléter les informations "
            },
            {
                "id": "FC3-41",
                "parent": "",
                "text": "partir de questions posées, prélever des informations (en faisant des inférences si nécessaire) qui seront combinées pour donner un sens global au(x) document(s)"
            },
            {
                "id": "FC3-42",
                "parent": "FC3-25",
                "text": "Lire une oeuvre et se l'approprier "
            },
            {
                "id": "FC3-43",
                "parent": "FC3-42",
                "text": "Mettre en relation le texte lu avec une autre oeuvre ou une autre référence culturelle "
            },
            {
                "id": "FC3-44",
                "parent": "FC3-42",
                "text": "Mettre en relation le texte qu'il est en train de lire avec ses expériences personnelles "
            },
            {
                "id": "FC3-45",
                "parent": "FC3-42",
                "text": "Développer le plaisir de lire, notamment avec des oeuvres choisies "
            },
            {
                "id": "FC3-46",
                "parent": "FC3-42",
                "text": "S'engager et persévérer dans sa lecture"
            },
            {
                "id": "FC3-47",
                "parent": "FC3-0",
                "text": "Sixième"
            },
            {
                "id": "FC3-48",
                "parent": "FC3-47",
                "text": "Lire avec fluidité "
            },
            {
                "id": "FC3-49",
                "parent": "FC3-48",
                "text": "Poursuivre l'entraînement à la lecture silencieuse et à la lecture à voix haute en renforçant l'acquisition d'un phrasé et d'une prosodie adaptés au texte "
            },
            {
                "id": "FC3-50",
                "parent": "FC3-48",
                "text": "Prendre en compte les groupes syntaxiques (groupes de mots avec unité de sens), les marques de ponctuation, les liaisons dans sa lecture "
            },
            {
                "id": "FC3-51",
                "parent": "FC3-48",
                "text": "Parvenir à lire correctement en ciblant 130 mots par minute en moyenne"
            },
            {
                "id": "FC3-52",
                "parent": "FC3-47",
                "text": "Lire à voix haute avec expressivité "
            },
            {
                "id": "FC3-53",
                "parent": "FC3-52",
                "text": "Lire à voix haute, avec aisance et expressivité, un texte de 10 à 20 lignes en regardant l'auditoire "
            },
            {
                "id": "FC3-54",
                "parent": "FC3-52",
                "text": "Poursuivre le travail de mise en voix du texte "
            },
            {
                "id": "FC3-55",
                "parent": "FC3-52",
                "text": "Rendre compte des émotions et sentiments des personnages, et des intentions de l'auteur "
            },
            {
                "id": "FC3-56",
                "parent": "FC3-52",
                "text": "Parvenir à rendre l'intonation, le rythme et la caractérisation des personnages dans le dialogue de récit "
            },
            {
                "id": "FC3-57",
                "parent": "FC3-52",
                "text": "Prendre du plaisir à lire et à partager sa lecture"
            },
            {
                "id": "FC3-58",
                "parent": "FC3-47",
                "text": "Lire et comprendre seul des textes, des documents et des images "
            },
            {
                "id": "FC3-59",
                "parent": "FC3-58",
                "text": "Dégager le sens global d'un texte, affiner sa compréhension et devenir un lecteur autonome "
            },
            {
                "id": "FC3-60",
                "parent": "FC3-58",
                "text": "Dégager les principales caractéristiques d'un texte et le rattacher à un genre "
            },
            {
                "id": "FC3-61",
                "parent": "FC3-58",
                "text": "Dégager le sens global de textes de genres différents, savoir repérer une information plus ou moins saillante, effectuer des inférences sur de larges extraits "
            },
            {
                "id": "FC3-62",
                "parent": "FC3-58",
                "text": "Repérer les informations explicites et implicites, les liens logiques, les reprises nominales "
            },
            {
                "id": "FC3-63",
                "parent": "FC3-58",
                "text": "Justifier ses interprétations ou ses réponses en prenant appui sur le texte ou sur ses connaissances"
            },
            {
                "id": "FC3-64",
                "parent": "FC3-47",
                "text": "Lire et comprendre des textes, des documents et des images pour apprendre dans toutes les disciplines "
            },
            {
                "id": "FC3-65",
                "parent": "FC3-64",
                "text": "Identifier la nature et la source des documents "
            },
            {
                "id": "FC3-66",
                "parent": "FC3-64",
                "text": "Rencontrer des textes, des oeuvres et des documents variés (image, tableau, schéma, articles de presse, etc.)"
            },
            {
                "id": "FC3-67",
                "parent": "FC3-64",
                "text": "Comparer des documents de genres différents et repérer ce qui les rapproche et ce qui les différencie "
            },
            {
                "id": "FC3-68",
                "parent": "FC3-64",
                "text": "Apprendre à mettre en relation des informations dans le cas de documents composites "
            },
            {
                "id": "FC3-69",
                "parent": "FC3-64",
                "text": "Prendre appui sur les éléments essentiels d'une image fixe et les interpréter"
            },
            {
                "id": "FC3-70",
                "parent": "FC3-47",
                "text": "Lire une oeuvre et se l'approprier "
            },
            {
                "id": "FC3-71",
                "parent": "FC3-70",
                "text": "Lire et étudier en classe trois oeuvres du patrimoine en lecture intégrale et trois oeuvres complètes en lecture cursive "
            },
            {
                "id": "FC3-72",
                "parent": "FC3-70",
                "text": "Développer sa culture littéraire et artistique "
            },
            {
                "id": "FC3-73",
                "parent": "FC3-70",
                "text": "Mettre en relation le texte lu avec d'autres références : expérience vécue, connaissances culturelles, enjeux contemporains, etc. "
            },
            {
                "id": "FC3-74",
                "parent": "FC3-70",
                "text": "Pouvoir proposer une évocation spontanée de sa lecture "
            },
            {
                "id": "FC3-75",
                "parent": "FC3-70",
                "text": "Prendre appui sur des éléments précis pour fonder sa compréhension fine d'une oeuvre et engager son interprétation "
            },
            {
                "id": "FC3-76",
                "parent": "FC3-70",
                "text": "Partager ses impressions de lecture et en débattre, confronter ses jugements "
            },
            {
                "id": "FC3-77",
                "parent": "FC3-70",
                "text": "Développer le plaisir de lire et de partager ses lectures "
            },
            {
                "id": "FC3-78",
                "parent": "FC3-70",
                "text": "S'engager, persévérer dans sa lecture"
            },
            {
                "id": "FC3-79",
                "parent": "FC3",
                "text": "Culture littéraire et artistique"
            },
            {
                "id": "FC3-80",
                "parent": "FC3-79",
                "text": "Cours moyen première et deuxième années"
            },
            {
                "id": "FC3-81",
                "parent": "FC3-80",
                "text": "Découvrir des héroïnes, des héros "
            },
            {
                "id": "FC3-82",
                "parent": "FC3-81",
                "text": "Inviter les élèves à réfléchir sur ce qui constitue une héroïne ou un héros à travers des oeuvres de la littérature patrimoniale et de la littérature de jeunesse (épopée, roman, fable, conte, nouvelle, pièce de théâtre), c'est les aider à ouvrir le champ de leurs représentations et à les dépasser. Le travail de compréhension des lectures proposées, les échanges organisés et les jeux avec ces figures (lecture à voix haute, jeu scénique, etc.) conduisent les élèves à comprendre les motivations de ces personnages, mais aussi à percevoir leurs éventuelles fragilités et à s'interroger sur les valeurs morales et culturelles dont ils sont porteurs."
            },
            {
                "id": "FC3-83",
                "parent": "FC3-80",
                "text": "Se confronter au merveilleux, à l'étrange "
            },
            {
                "id": "FC3-84",
                "parent": "FC3-83",
                "text": "Découvrir des mondes imaginaires et éveiller la sensibilité à l'inconnu permet à l'élève d'explorer des thèmes universels : la peur, le désir d'évasion et la curiosité pour l'inexplicable. En explorant des phénomènes étranges, l'élève confronté à l'intensité des émotions suscitées remet en question sa perception du monde, et parfois de lui-même. L'étude du merveilleux et de l'étrange, en s'appuyant sur des textes variés, permet d'allier la découverte du texte littéraire à une réflexion plus large sur notre rapport à l'inexplicable, au rêve et à la peur, et de développer l'esprit critique et la créativité."
            },
            {
                "id": "FC3-85",
                "parent": "FC3-80",
                "text": "Imaginer et vivre d'autres vies "
            },
            {
                "id": "FC3-86",
                "parent": "FC3-85",
                "text": "En s'identifiant aux personnages ou en s'en démarquant, en s'immergeant dans un univers étranger ou insolite, l'élève est invité à s'engager personnellement dans la lecture d'oeuvres intégrales patrimoniales ou contemporaines ou d'extraits choisis. Les récits de vie offerts par la littérature de jeunesse aident les élèves à se projeter dans des existences nouvelles, à développer leur sensibilité et leur empathie, et à nourrir leur créativité, tout en renforçant leur goût pour la lecture."
            },
            {
                "id": "FC3-87",
                "parent": "FC3-80",
                "text": "Comprendre et interroger la morale "
            },
            {
                "id": "FC3-88",
                "parent": "FC3-87",
                "text": "En prenant appui sur l'étude et l'appropriation d'une oeuvre intégrale, patrimoniale ou relevant de la littérature de jeunesse, ou sur des extraits choisis, l'élève découvre des fondements de la vie en commun, notamment la justice, la tolérance, la liberté, le respect des différences, la préservation de l'environnement. Il apprend à comprendre les valeurs morales portées par les personnages, à s'interroger sur les conséquences de leurs actions et leurs effets, sur le collectif, et développe son esprit critique et sa propre sensibilité."
            },
            {
                "id": "FC3-89",
                "parent": "FC3-80",
                "text": "Savourer le goût des mots, imaginer et créer en poésie "
            },
            {
                "id": "FC3-90",
                "parent": "FC3-89",
                "text": "Par l'écoute et la lecture d'un recueil de poèmes et de textes poétiques de siècles différents, l'élève développe une posture subjective de lecteur fondée sur la sensibilité à la langue, sur l'émotion qu'elle procure et sur l'aptitude à opérer un lien entre les mots et les choses, entre les mots, le monde et soi-même. L'élève mesure ainsi les écarts possibles à la norme qu'il construit par ailleurs en cours de grammaire et de vocabulaire : il les reconnaît et est capable d'en jouer."
            },
            {
                "id": "FC3-91",
                "parent": "FC3-80",
                "text": "Se découvrir, s'affirmer dans le rapport aux autres "
            },
            {
                "id": "FC3-92",
                "parent": "FC3-91",
                "text": "Se découvrir est une aventure à la fois intime et collective. Face aux défis de l'existence, les personnages de récits, de romans, de bandes dessinées et de pièces de théâtre se construisent et se redéfinissent, au gré de leurs rencontres et de leur propre cheminement. Grâce à ces lectures, aux échanges et aux différentes activités conduites en classe à partir des textes, l'élève s'ouvre à la complexité humaine et grandit."
            },
            {
                "id": "FC3-93",
                "parent": "FC3-79",
                "text": "Sixième"
            },
            {
                "id": "FC3-94",
                "parent": "FC3-93",
                "text": "Créer, recréer le monde : récits des origines (récit, fiction) "
            },
            {
                "id": "FC3-95",
                "parent": "FC3-94",
                "text": "En prenant appui sur l'étude et l'appropriation de larges extraits d'oeuvres intégrales, comme sur des lectures cursives, l'élève découvre au moins un texte fondateur (issu notamment des religions monothéistes) et quelques mythes et contes étiologiques (issus de différents continents et traditions culturelles). Il les compare, devient sensible aux symboles et aux métaphores, s'interroge sur les représentations et les valeurs qu'ils portent. Au fil de l'année et de sa progression, l'élève entrevoit la force des récits collectifs au sein desquels il peut inscrire sa propre vision, notamment par des productions écrites et créatives."
            },
            {
                "id": "FC3-96",
                "parent": "FC3-93",
                "text": "Chanter et enchanter le monde : mots et merveilles (poésie) "
            },
            {
                "id": "FC3-97",
                "parent": "FC3-96",
                "text": "En prenant appui sur l'étude et l'appropriation d'une oeuvre poétique intégrale (recueil ou section de recueil) et/ou d'un groupement de textes, comme sur des lectures cursives, l'élève manipule ces ressources de la langue. Au fil de l'année, il découvre ainsi la magie du langage poétique. En explorant différentes traditions et cultures poétiques, y compris francophones, qu'elles soient patrimoniales ou contemporaines, l'élève mesure, qu'au-delà de ses aspects formels (vers, rimes, etc.), la force de la poésie réside dans ses images et son pouvoir d'évocation."
            },
            {
                "id": "FC3-98",
                "parent": "FC3-93",
                "text": "Se masquer, jouer, déjouer : ruses en action (théâtre) "
            },
            {
                "id": "FC3-99",
                "parent": "FC3-98",
                "text": "Inviter les élèves à découvrir des ruses en action, c'est leur permettre d'appréhender le rapport complexe qui se noue au théâtre entre l'illusion et le réel, l'artifice et la vérité, l'être et le paraitre. L'élève est conduit à apprécier le ressort dramatique et comique que constitue la ruse, à s'interroger sur les modalités et les enjeux de sa mise en scène, et sur les valeurs qui sous-tendent l'action. Les activités de théâtralisation et les pratiques théâtrales – mise en voix, mise en jeu et mise en scène – contribuent à l'appropriation de l'oeuvre. Au fil de l'année, l'élève développe ainsi ses compétences orales – écoute, concentration et expression – mobilise sa créativité et son jugement critique, renforce sa confiance en lui et en l'autre."
            },
            {
                "id": "FC3-100",
                "parent": "FC3-93",
                "text": "Partir à l'aventure ! (récit, fiction) "
            },
            {
                "id": "FC3-101",
                "parent": "FC3-100",
                "text": "En prenant appui sur l'étude et l'appropriation d'une oeuvre intégrale et/ou d'un groupement de textes, comme sur des lectures cursives, l'élève interroge l'élan constitutif de l'aventure et mesure combien l'expression littéraire en décuple le pouvoir. Au fil de l'année et de sa progression, il enrichit sa culture et sa réflexion personnelle, en engageant son imagination et sa créativité artistique notamment à travers la production de récits personnels."
            },
            {
                "id": "FC3-102",
                "parent": "FC3-93",
                "text": "Rencontrer des monstres : expérience de l'autre, expérience de soi (récit, fiction) "
            },
            {
                "id": "FC3-103",
                "parent": "FC3-102",
                "text": "En prenant appui sur l'étude et l'appropriation d'une oeuvre intégrale et/ou d'un groupement de textes, comme sur des lectures cursives, l'élève est invité à découvrir la part d'humanité d'un personnage monstrueux inspirant la peur ou la compassion et à dégager la visée éducative d'un conte ou d'un récit. Au fil de l'année, l'élève prend conscience de la permanence de la figure du monstre à travers les âges et en identifie les principales caractéristiques. Il mobilise sa créativité, ses connaissances et ses acquis lexicaux pour créer de nouveaux monstres et les intégrer dans des récits existants ou les mettre en scène dans une production inédite."
            },
            {
                "id": "FC3-104",
                "parent": "FC3",
                "text": "Ecriture"
            },
            {
                "id": "FC3-105",
                "parent": "FC3-104",
                "text": "Cours moyen première année"
            },
            {
                "id": "FC3-106",
                "parent": "FC3-102",
                "text": "crire à la main de manière fluide et efficace "
            },
            {
                "id": "FC3-107",
                "parent": "FC3-102",
                "text": "Copier et produire des textes "
            },
            {
                "id": "FC3-108",
                "parent": "FC3-102",
                "text": "Acquérir des stratégies de copie"
            },
            {
                "id": "FC3-109",
                "parent": "FC3-102",
                "text": "crire pour réfléchir, apprendre et mémoriser "
            },
            {
                "id": "FC3-110",
                "parent": "FC3-109",
                "text": "crire pour repérer et trier les informations pertinentes "
            },
            {
                "id": "FC3-111",
                "parent": "FC3-102",
                "text": "Produire des écrits réflexifs courts pour s'entraîner à expliquer un point de vue "
            },
            {
                "id": "FC3-112",
                "parent": "FC3-102",
                "text": "Reformuler, avec l'aide du professeur et de ses pairs, l'essentiel d'une leçon ou d'une activité pour se l'approprier "
            },
            {
                "id": "FC3-113",
                "parent": "FC3-102",
                "text": "Produire des écrits courts pour appliquer une règle de grammaire ou employer et mémoriser le lexique appris"
            },
            {
                "id": "FC3-114",
                "parent": "FC3-105",
                "text": "Produire des écrits variés "
            },
            {
                "id": "FC3-115",
                "parent": "FC3-114",
                "text": "Découvrir et explorer des situations variées d'écriture : raconter, expliquer "
            },
            {
                "id": "FC3-116",
                "parent": "FC3-115",
                "text": "crire au quotidien des textes personnels (donner son avis, imaginer une suite de texte, formuler des hypothèses, etc.) "
            },
            {
                "id": "FC3-117",
                "parent": "FC3-114",
                "text": "Utiliser le brouillon pour préparer son texte "
            },
            {
                "id": "FC3-118",
                "parent": "FC3-114",
                "text": "Exercer sa vigilance quant au respect des codes de l'écrit "
            },
            {
                "id": "FC3-119",
                "parent": "FC3-114",
                "text": "Prendre conscience des composantes de la cohérence textuelle "
            },
            {
                "id": "FC3-120",
                "parent": "FC3-114",
                "text": "Améliorer tout ou partie de son texte à partir des pistes données par l'enseignant et/ou ses pairs"
            },
            {
                "id": "FC3-121",
                "parent": "FC3-104",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "FC3-122",
                "parent": "FC3-114",
                "text": "crire à la main de manière fluide et efficace "
            },
            {
                "id": "FC3-123",
                "parent": "FC3-114",
                "text": "Copier et produire des textes "
            },
            {
                "id": "FC3-124",
                "parent": "FC3-114",
                "text": "Acquérir des stratégies de copie"
            },
            {
                "id": "FC3-125",
                "parent": "FC3-121",
                "text": "crire pour réfléchir, apprendre et mémoriser "
            },
            {
                "id": "FC3-126",
                "parent": "FC3-124",
                "text": "crire pour comparer deux documents "
            },
            {
                "id": "FC3-127",
                "parent": "FC3-125",
                "text": "Produire des écrits réflexifs courts pour s'entraîner à expliquer un point de vue intégrant plusieurs documents "
            },
            {
                "id": "FC3-128",
                "parent": "FC3-125",
                "text": "Reformuler, avec l'aide du professeur et de ses pairs, l'essentiel d'une leçon, y compris de manière schématique "
            },
            {
                "id": "FC3-129",
                "parent": "FC3-125",
                "text": "Produire des écrits courts pour appliquer une règle de grammaire ou employer et mémoriser le lexique appris"
            },
            {
                "id": "FC3-130",
                "parent": "FC3-121",
                "text": "Produire des écrits variés "
            },
            {
                "id": "FC3-131",
                "parent": "FC3-130",
                "text": "Découvrir et manipuler des situations variées d'écriture : décrire, dialoguer "
            },
            {
                "id": "FC3-132",
                "parent": "FC3-131",
                "text": "crire au quotidien des textes personnels (nuancer un avis, imaginer une suite de texte enrichie d'un court passage de dialogue et/ou de description, formuler les étapes d'une expérience vécue en sciences, etc.) "
            },
            {
                "id": "FC3-133",
                "parent": "FC3-130",
                "text": "Faire preuve d'autonomie dans le respect des codes de l'écrit "
            },
            {
                "id": "FC3-134",
                "parent": "FC3-130",
                "text": "Appliquer les principes de la cohérence textuelle "
            },
            {
                "id": "FC3-135",
                "parent": "FC3-130",
                "text": "Utiliser le brouillon pour préparer son texte "
            },
            {
                "id": "FC3-136",
                "parent": "FC3-130",
                "text": "Améliorer tout ou partie de son texte à partir des pistes données par l'enseignant, ses pairs et/ou son autoévaluation"
            },
            {
                "id": "FC3-137",
                "parent": "FC3-104",
                "text": "Sixième"
            },
            {
                "id": "FC3-138",
                "parent": "FC3-130",
                "text": "crire à la main de manière fluide et efficace "
            },
            {
                "id": "FC3-139",
                "parent": "FC3-130",
                "text": "Copier des textes de façon lisible, régulière, soignée et sans erreur d'orthographe ou de ponctuation "
            },
            {
                "id": "FC3-140",
                "parent": "FC3-130",
                "text": "Produire des textes en veillant à leur lisibilité et à leur mise en forme"
            },
            {
                "id": "FC3-141",
                "parent": "FC3-130",
                "text": "crire pour réfléchir, apprendre et mémoriser "
            },
            {
                "id": "FC3-142",
                "parent": "FC3-141",
                "text": "crire pour résumer et/ou synthétiser "
            },
            {
                "id": "FC3-143",
                "parent": "FC3-130",
                "text": "Produire des écrits réflexifs courts pour argumenter et justifier ses choix "
            },
            {
                "id": "FC3-144",
                "parent": "FC3-130",
                "text": "S'approprier individuellement l'essentiel d'une leçon, avec l'aide ponctuelle du professeur et de ses pairs "
            },
            {
                "id": "FC3-145",
                "parent": "FC3-130",
                "text": "Hiérarchiser des idées "
            },
            {
                "id": "FC3-146",
                "parent": "FC3-130",
                "text": "Produire des écrits courts pour appliquer une règle de grammaire ou employer et mémoriser le lexique appris"
            },
            {
                "id": "FC3-147",
                "parent": "FC3-137",
                "text": "Produire des écrits variés "
            },
            {
                "id": "FC3-148",
                "parent": "FC3-147",
                "text": "Découvrir et expérimenter des situations variées d'écriture : résumer, synthétiser "
            },
            {
                "id": "FC3-149",
                "parent": "FC3-148",
                "text": "crire très fréquemment des textes personnels (donner un avis personnel en le justifiant, produire un écrit narratif, expliquer une démarche, etc.) "
            },
            {
                "id": "FC3-150",
                "parent": "FC3-147",
                "text": "Utiliser le brouillon pour préparer son texte "
            },
            {
                "id": "FC3-151",
                "parent": "FC3-147",
                "text": "Respecter les codes de l'écrit "
            },
            {
                "id": "FC3-152",
                "parent": "FC3-147",
                "text": "Veiller à la cohérence textuelle "
            },
            {
                "id": "FC3-153",
                "parent": "FC3-147",
                "text": "Améliorer tout ou partie de son texte à partir de son autoévaluation et/ou de pistes données par l'enseignant et ses pairs "
            },
            {
                "id": "FC3-154",
                "parent": "FC3-147",
                "text": "Prendre en compte les normes de l'écrit pour réviser un texte"
            },
            {
                "id": "FC3-155",
                "parent": "FC3",
                "text": "Oral"
            },
            {
                "id": "FC3-156",
                "parent": "FC3-155",
                "text": "Cours moyen première année"
            },
            {
                "id": "FC3-157",
                "parent": "FC3-147",
                "text": "couter pour comprendre "
            },
            {
                "id": "FC3-158",
                "parent": "FC3-147",
                "text": "Construire sa posture d'auditeur en maintenant une écoute active orientée en fonction du but "
            },
            {
                "id": "FC3-159",
                "parent": "FC3-147",
                "text": "Comprendre un message oral provenant d'un tiers ou d'un média (interview, reportage) "
            },
            {
                "id": "FC3-160",
                "parent": "FC3-147",
                "text": "Manifester sa compréhension des textes entendus "
            },
            {
                "id": "FC3-161",
                "parent": "FC3-147",
                "text": "Identifier les caractéristiques des différents genres de discours "
            },
            {
                "id": "FC3-162",
                "parent": "FC3-147",
                "text": "Manifester sa sensibilité à l'écoute d'un texte"
            },
            {
                "id": "FC3-163",
                "parent": "FC3-156",
                "text": "Dire pour être compris dans toutes les disciplines "
            },
            {
                "id": "FC3-164",
                "parent": "FC3-163",
                "text": "Réaliser une production orale, individuelle ou collective, claire et organisée pour raconter, expliquer, argumenter, justifier, partager des connaissances "
            },
            {
                "id": "FC3-165",
                "parent": "FC3-163",
                "text": "Faire vivre un texte littéraire, historique ou documentaire par une lecture expressive devant un public "
            },
            {
                "id": "FC3-166",
                "parent": "FC3-163",
                "text": "Utiliser l'oral comme outil réflexif"
            },
            {
                "id": "FC3-167",
                "parent": "FC3-156",
                "text": "Participer à des échanges verbaux "
            },
            {
                "id": "FC3-168",
                "parent": "FC3-167",
                "text": "Prendre la parole en respectant les codes de la communication "
            },
            {
                "id": "FC3-169",
                "parent": "FC3-167",
                "text": "Utiliser des structures de langage en fonction du but recherché "
            },
            {
                "id": "FC3-170",
                "parent": "FC3-167",
                "text": "Construire et ajuster son propos pour présenter de façon claire et ordonnée des explications, des informations, un point de vue "
            },
            {
                "id": "FC3-171",
                "parent": "FC3-167",
                "text": "Se servir du langage oral pour construire une analyse collective en interaction "
            },
            {
                "id": "FC3-172",
                "parent": "FC3-167",
                "text": "Adapter son discours en fonction de la situation de communication "
            },
            {
                "id": "FC3-173",
                "parent": "FC3-167",
                "text": "Porter un regard critique sur l'oral produit"
            },
            {
                "id": "FC3-174",
                "parent": "FC3-155",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "FC3-175",
                "parent": "FC3-167",
                "text": "couter pour comprendre "
            },
            {
                "id": "FC3-176",
                "parent": "FC3-167",
                "text": "Construire sa posture d'auditeur en maintenant une écoute active orientée en fonction du but "
            },
            {
                "id": "FC3-177",
                "parent": "FC3-167",
                "text": "Comprendre un message oral provenant d'un tiers ou d'un média (interview, reportage) "
            },
            {
                "id": "FC3-178",
                "parent": "FC3-167",
                "text": "Manifester sa compréhension des textes entendus "
            },
            {
                "id": "FC3-179",
                "parent": "FC3-167",
                "text": "Identifier les caractéristiques des différents genres de discours "
            },
            {
                "id": "FC3-180",
                "parent": "FC3-167",
                "text": "Manifester sa sensibilité à l'écoute d'un texte"
            },
            {
                "id": "FC3-181",
                "parent": "FC3-174",
                "text": "Dire pour être compris dans toutes les disciplines "
            },
            {
                "id": "FC3-182",
                "parent": "FC3-181",
                "text": "Réaliser une production orale, individuelle ou collective, claire et organisée pour raconter, expliquer, argumenter, justifier, partager des connaissances "
            },
            {
                "id": "FC3-183",
                "parent": "FC3-181",
                "text": "Faire vivre un texte littéraire, historique ou documentaire par une lecture expressive devant un public "
            },
            {
                "id": "FC3-184",
                "parent": "FC3-181",
                "text": "Utiliser l'oral comme outil réflexif"
            },
            {
                "id": "FC3-185",
                "parent": "FC3-174",
                "text": "Participer à des échanges verbaux "
            },
            {
                "id": "FC3-186",
                "parent": "FC3-185",
                "text": "Prendre la parole en respectant les codes de la communication "
            },
            {
                "id": "FC3-187",
                "parent": "FC3-185",
                "text": "Utiliser des structures de langage en fonction du but recherché "
            },
            {
                "id": "FC3-188",
                "parent": "FC3-185",
                "text": "Construire et ajuster son propos pour présenter de façon claire et ordonnée des explications, des informations, un point de vue Se servir du langage oral pour construire une analyse collective en interaction "
            },
            {
                "id": "FC3-189",
                "parent": "FC3-185",
                "text": "Adapter son discours en fonction de la situation de communication "
            },
            {
                "id": "FC3-190",
                "parent": "FC3-185",
                "text": "Porter un regard critique sur l'oral produit"
            },
            {
                "id": "FC3-191",
                "parent": "FC3-155",
                "text": "Sixième"
            },
            {
                "id": "FC3-192",
                "parent": "FC3-185",
                "text": "couter pour comprendre "
            },
            {
                "id": "FC3-193",
                "parent": "FC3-185",
                "text": "Construire sa posture d'auditeur en maintenant une écoute active orientée en fonction du but "
            },
            {
                "id": "FC3-194",
                "parent": "FC3-185",
                "text": "Comprendre un message oral provenant d'un tiers ou d'un média (interview, reportage) "
            },
            {
                "id": "FC3-195",
                "parent": "FC3-185",
                "text": "Montrer sa compréhension notamment en reformulant avec ses mots des informations explicites et implicites d'un texte entendu "
            },
            {
                "id": "FC3-196",
                "parent": "FC3-185",
                "text": "Identifier les caractéristiques des différents genres de discours "
            },
            {
                "id": "FC3-197",
                "parent": "FC3-185",
                "text": "Exprimer son ressenti à l'écoute d'un texte"
            },
            {
                "id": "FC3-198",
                "parent": "FC3-191",
                "text": "Dire pour être compris dans toutes les disciplines "
            },
            {
                "id": "FC3-199",
                "parent": "FC3-198",
                "text": "Réaliser une production orale, individuelle ou collective, claire et organisée pour raconter, expliquer, argumenter, justifier ou partager des connaissances "
            },
            {
                "id": "FC3-200",
                "parent": "FC3-198",
                "text": "Lire, devant un public, de manière claire et expressive, un texte littéraire ou documentaire "
            },
            {
                "id": "FC3-201",
                "parent": "FC3-198",
                "text": "Utiliser l'oral comme outil réflexif"
            },
            {
                "id": "FC3-202",
                "parent": "FC3-191",
                "text": "Participer à des échanges verbaux "
            },
            {
                "id": "FC3-203",
                "parent": "FC3-202",
                "text": "Prendre la parole en respectant les codes de la communication "
            },
            {
                "id": "FC3-204",
                "parent": "FC3-202",
                "text": "Construire et ajuster son propos pour présenter de façon claire et ordonnée des explications, des informations, un point de vue, une réponse à une question "
            },
            {
                "id": "FC3-205",
                "parent": "FC3-202",
                "text": "Adapter son discours en fonction de la situation de communication "
            },
            {
                "id": "FC3-206",
                "parent": "FC3-202",
                "text": "Porter un regard critique sur l'oral produit "
            },
            {
                "id": "FC3-207",
                "parent": "FC3-202",
                "text": "Intervenir en tenant compte de ce qui a précédemment été dit par autrui"
            },
            {
                "id": "FC3-208",
                "parent": "FC3",
                "text": "Vocabulaire"
            },
            {
                "id": "FC3-209",
                "parent": "FC3-208",
                "text": "Cours moyen première année"
            },
            {
                "id": "FC3-210",
                "parent": "FC3-209",
                "text": "Enrichir son vocabulaire dans toutes les disciplines "
            },
            {
                "id": "FC3-211",
                "parent": "FC3-210",
                "text": "Approfondir, en contexte, le vocabulaire appris au cycle 2 "
            },
            {
                "id": "FC3-212",
                "parent": "FC3-210",
                "text": "Mémoriser des mots et expressions en s'appuyant sur des corpus variés issus de toutes les disciplines "
            },
            {
                "id": "FC3-213",
                "parent": "FC3-210",
                "text": "Identifier les mots inconnus, lors de ses différentes lectures, et rechercher leur signification en s'appuyant sur la morphologie et sur le contexte"
            },
            {
                "id": "FC3-214",
                "parent": "FC3-210",
                "text": "tablir des relations entre les mots "
            },
            {
                "id": "FC3-215",
                "parent": "FC3-214",
                "text": "tablir des relations morphologiques et sémantiques entre les mots "
            },
            {
                "id": "FC3-216",
                "parent": "FC3-210",
                "text": "Comprendre et utiliser les notions de synonymie et antonymie"
            },
            {
                "id": "FC3-217",
                "parent": "FC3-209",
                "text": "Réemployer le vocabulaire étudié "
            },
            {
                "id": "FC3-218",
                "parent": "FC3-215",
                "text": "l'oral et à l'écrit, utiliser à bon escient les mots appris et se les approprier durablement "
            },
            {
                "id": "FC3-219",
                "parent": "FC3-215",
                "text": "l'oral et à l'écrit, utiliser à bon escient les mots polysémiques dans différents contextes disciplinaires"
            },
            {
                "id": "FC3-220",
                "parent": "FC3-209",
                "text": "Mémoriser l'orthographe des mots "
            },
            {
                "id": "FC3-221",
                "parent": "FC3-216",
                "text": "crire correctement les mots les plus fréquents de la langue en s'appuyant sur les régularités et la formation "
            },
            {
                "id": "FC3-222",
                "parent": "FC3-220",
                "text": "S'appuyer sur la dimension morphologique des mots rencontrés lors de ses différentes lectures pour les orthographier"
            },
            {
                "id": "FC3-223",
                "parent": "FC3-208",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "FC3-224",
                "parent": "FC3-223",
                "text": "Enrichir son vocabulaire dans toutes les disciplines "
            },
            {
                "id": "FC3-225",
                "parent": "FC3-224",
                "text": "Acquérir un vocabulaire précis dans différents univers de référence "
            },
            {
                "id": "FC3-226",
                "parent": "FC3-224",
                "text": "Se servir du contexte et de la morphologie pour comprendre les mots inconnus rencontrés au cours de sa lecture "
            },
            {
                "id": "FC3-227",
                "parent": "FC3-224",
                "text": "Utiliser des dictionnaires"
            },
            {
                "id": "FC3-228",
                "parent": "FC3-224",
                "text": "tablir des relations entre les mots "
            },
            {
                "id": "FC3-229",
                "parent": "FC3-224",
                "text": "Approfondir sa compréhension de la notion de polysémie dans un contexte non référentiel "
            },
            {
                "id": "FC3-230",
                "parent": "FC3-224",
                "text": "Approfondir les relations morphologiques et sémantiques entre les mots"
            },
            {
                "id": "FC3-231",
                "parent": "FC3-223",
                "text": "Réemployer le vocabulaire étudié "
            },
            {
                "id": "FC3-232",
                "parent": "FC3-221",
                "text": "l'oral et à l'écrit, utiliser précisément le vocabulaire de différents univers de référence et se l'approprier durablement "
            },
            {
                "id": "FC3-233",
                "parent": "FC3-221",
                "text": "l'oral et à l'écrit, utiliser à bon escient les mots polysémiques dans différents contextes disciplinaires et se les approprier durablement"
            },
            {
                "id": "FC3-234",
                "parent": "FC3-223",
                "text": "Mémoriser l'orthographe des mots "
            },
            {
                "id": "FC3-235",
                "parent": "FC3-230",
                "text": "crire correctement les mots fréquents en s'appuyant sur les régularités et la formation."
            },
            {
                "id": "FC3-236",
                "parent": "FC3-208",
                "text": "Sixième"
            },
            {
                "id": "FC3-237",
                "parent": "FC3-236",
                "text": "Enrichir son vocabulaire dans toutes les disciplines "
            },
            {
                "id": "FC3-238",
                "parent": "FC3-237",
                "text": "Développer un vocabulaire spécifique dans différents univers de référence "
            },
            {
                "id": "FC3-239",
                "parent": "FC3-237",
                "text": "Choisir, de manière autonome, les stratégies les plus efficaces pour comprendre un mot inconnu en prenant l'initiative de déduire, de vérifier ou de rechercher le sens d'un mot"
            },
            {
                "id": "FC3-240",
                "parent": "FC3-236",
                "text": "tablir des relations entre les mots "
            },
            {
                "id": "FC3-241",
                "parent": "FC3-240",
                "text": "Composer et décomposer des mots pour les analyser et en créer de nouveaux en s'appuyant sur les relations morphologiques et sémantiques "
            },
            {
                "id": "FC3-242",
                "parent": "FC3-240",
                "text": "Différencier les mots simples, dérivés et composés "
            },
            {
                "id": "FC3-243",
                "parent": "FC3-240",
                "text": "Donner des exemples de synonymes et d'antonymes qui respectent la classe grammaticale du mot cible "
            },
            {
                "id": "FC3-244",
                "parent": "FC3-240",
                "text": "Se sensibiliser à l'étymologie et à l'évolution du sens des mots"
            },
            {
                "id": "FC3-245",
                "parent": "FC3-236",
                "text": "Réemployer le vocabulaire étudié "
            },
            {
                "id": "FC3-246",
                "parent": "FC3-235",
                "text": "l'oral et à l'écrit, utiliser à bon escient le vocabulaire spécifique issus de différents univers de référence et se l'approprier durablement, en respectant le registre de langue "
            },
            {
                "id": "FC3-247",
                "parent": "FC3-235",
                "text": "l'oral et à l'écrit, utiliser à bon escient les mots polysémiques dans différents contextes disciplinaires et se les approprier durablement"
            },
            {
                "id": "FC3-248",
                "parent": "FC3-236",
                "text": "Mémoriser l'orthographe des mots "
            },
            {
                "id": "FC3-249",
                "parent": "FC3-244",
                "text": "crire correctement les mots fréquents en situation autonome"
            },
            {
                "id": "FC3-250",
                "parent": "FC3",
                "text": "Grammaire et orthographe grammaticale"
            },
            {
                "id": "FC3-251",
                "parent": "FC3-250",
                "text": "Cours moyen première année"
            },
            {
                "id": "FC3-252",
                "parent": "FC3-251",
                "text": "Identifier les constituants d'une phrase simple"
            },
            {
                "id": "FC3-253",
                "parent": "FC3-252",
                "text": "Connaître les trois types de phrases et leurs formes "
            },
            {
                "id": "FC3-254",
                "parent": "FC3-253",
                "text": "Identifier les trois types de phrases (déclaratif, interrogatif, impératif ou injonctif) et comprendre leurs effets dans un texte simple "
            },
            {
                "id": "FC3-255",
                "parent": "FC3-253",
                "text": "Identifier les principales formes de phrases (négative, exclamative) et comprendre leurs effets dans un texte simple "
            },
            {
                "id": "FC3-256",
                "parent": "FC3-253",
                "text": "Transformer à l'oral puis à l'écrit des phrases d'un type à un autre, d'une forme à une autre "
            },
            {
                "id": "FC3-257",
                "parent": "FC3-253",
                "text": "Distinguer et produire différentes réalisations du type interrogatif à l'oral comme à l'écrit, en employant le point d'interrogation et en utilisant diverses tournures ou intonations pour exprimer l'interrogation (inversion du sujet, est-ce que, intonation ascendante à l'oral, etc.)"
            },
            {
                "id": "FC3-258",
                "parent": "FC3-252",
                "text": "Analyser une phrase simple "
            },
            {
                "id": "FC3-259",
                "parent": "FC3-258",
                "text": "Consolider l'identification du verbe conjugué "
            },
            {
                "id": "FC3-260",
                "parent": "FC3-258",
                "text": "Consolider l'identification du groupe sujet "
            },
            {
                "id": "FC3-261",
                "parent": "FC3-258",
                "text": "Identifier les différents types de sujets (pronoms personnels, groupes nominaux, plusieurs noms) "
            },
            {
                "id": "FC3-262",
                "parent": "FC3-258",
                "text": "Distinguer le complément d'objet du complément circonstanciel "
            },
            {
                "id": "FC3-263",
                "parent": "FC3-258",
                "text": "Après s'être assuré de la capacité à identifier le complément d'objet, différencier complément d'objet direct et complément d'objet indirect dans des phrases prototypiques sans ambigüité "
            },
            {
                "id": "FC3-264",
                "parent": "FC3-258",
                "text": "Identifier les groupes circonstanciels (sans les distinguer) "
            },
            {
                "id": "FC3-265",
                "parent": "FC3-258",
                "text": "Comprendre et utiliser les manipulations syntaxiques. Elles seront enseignées afin d'en faire des habiletés au service des activités langagières et plus particulièrement pour la production d'écrits et l'étude de la langue : déplacement, suppression (ou effacement), substitution (ou remplacement), addition (ou ajout), encadrement"
            },
            {
                "id": "FC3-266",
                "parent": "FC3-252",
                "text": "Distinguer les notions de nature ou classe grammaticale et de fonction "
            },
            {
                "id": "FC3-267",
                "parent": "FC3-266",
                "text": "Se familiariser avec les notions de nature et fonction"
            },
            {
                "id": "FC3-268",
                "parent": "FC3-252",
                "text": "Identifier les mots, un groupe de mots selon leur nature "
            },
            {
                "id": "FC3-269",
                "parent": "FC3-268",
                "text": "Identifier et nommer les déterminants suivants : articles définis, indéfinis, déterminants possessifs et démonstratifs "
            },
            {
                "id": "FC3-270",
                "parent": "FC3-268",
                "text": "Identifier et nommer les conjonctions de coordination "
            },
            {
                "id": "FC3-271",
                "parent": "FC3-268",
                "text": "Identifier et nommer les adverbes les plus fréquents — [les catégoriser, les compiler au fur et à mesure des rencontres. Leur caractère invariable est souligné] "
            },
            {
                "id": "FC3-272",
                "parent": "FC3-268",
                "text": "Distinguer les pronoms personnels sujets des pronoms personnels compléments "
            },
            {
                "id": "FC3-273",
                "parent": "FC3-268",
                "text": "Remplacer un groupe nominal sujet par un pronom personnel sujet "
            },
            {
                "id": "FC3-274",
                "parent": "FC3-268",
                "text": "Remplacer un groupe nominal objet par un pronom personnel objet"
            },
            {
                "id": "FC3-275",
                "parent": "FC3-252",
                "text": "Analyser le groupe nominal "
            },
            {
                "id": "FC3-276",
                "parent": "FC3-275",
                "text": "Repérer des groupes nominaux dans une phrase simple et nommer les différents éléments qui les constituent : Dét. + Nom ; Dét. + Nom + Adj. ; Dét. + Adj.+ Nom "
            },
            {
                "id": "FC3-277",
                "parent": "FC3-275",
                "text": "Repérer et nommer le nom noyau dans le groupe nominal "
            },
            {
                "id": "FC3-278",
                "parent": "FC3-275",
                "text": "Aborder la notion d'épithète"
            },
            {
                "id": "FC3-279",
                "parent": "FC3-251",
                "text": "Acquérir l'orthographe grammaticale"
            },
            {
                "id": "FC3-280",
                "parent": "FC3-279",
                "text": "Identifier les classes de mots subissant des variations "
            },
            {
                "id": "FC3-281",
                "parent": "FC3-280",
                "text": "Identifier, classer et repérer les critères de variations (genre, nombre, personne, temps) au sein des différentes classes grammaticales : déterminant, nom, adjectif, pronom personnel, verbe "
            },
            {
                "id": "FC3-282",
                "parent": "FC3-280",
                "text": "Retenir et restituer les variations des déterminants : articles, déterminants possessifs et démonstratifs "
            },
            {
                "id": "FC3-283",
                "parent": "FC3-280",
                "text": "Mobiliser ces connaissances dans les activités d'écriture ou d'entraînement par mémorisation ou par l'utilisation d'outils de référence"
            },
            {
                "id": "FC3-284",
                "parent": "FC3-279",
                "text": "Réaliser la chaîne d'accords au sein du groupe nominal "
            },
            {
                "id": "FC3-285",
                "parent": "FC3-284",
                "text": "Consolider la connaissance et la maîtrise des variations les plus régulières en genre et nombre des noms, des adjectifs, des déterminants (les formes irrégulières sont introduites et stabilisées au cours du cycle) "
            },
            {
                "id": "FC3-286",
                "parent": "FC3-284",
                "text": "Repérer le donneur d'accord du groupe nominal : le nom noyau "
            },
            {
                "id": "FC3-287",
                "parent": "FC3-284",
                "text": "Transformer le genre et le nombre de groupes nominaux simples isolés puis inscrits dans des phrases simples, en effectuant toutes les variations nécessaires "
            },
            {
                "id": "FC3-288",
                "parent": "FC3-284",
                "text": "Justifier les variations morphologiques effectuées "
            },
            {
                "id": "FC3-289",
                "parent": "FC3-284",
                "text": "Systématiser la chaîne d'accords dans le groupe nominal"
            },
            {
                "id": "FC3-290",
                "parent": "FC3-279",
                "text": "Accorder le sujet et le verbe "
            },
            {
                "id": "FC3-291",
                "parent": "FC3-290",
                "text": "Repérer le sujet du verbe : notamment le nom noyau dans le cas d'un groupe nominal "
            },
            {
                "id": "FC3-292",
                "parent": "FC3-290",
                "text": "Accorder le participe passé avec le sujet dans le cas de l'emploi avec l'auxiliaire être "
            },
            {
                "id": "FC3-293",
                "parent": "FC3-290",
                "text": "Transformer à l'écrit et à l'oral des phrases en faisant varier le temps ou le sujet ; respecter toutes les chaînes d'accord "
            },
            {
                "id": "FC3-294",
                "parent": "FC3-290",
                "text": "Mémoriser les marques de personne des verbes les plus fréquents aux temps de conjugaison étudiés pour apprendre à accorder sujet et verbe dans tous types de productions écrites "
            },
            {
                "id": "FC3-295",
                "parent": "FC3-290",
                "text": "Distinguer les variations morphologiques du verbe de celles du nom (ex : il élève / tu élèves / elles élèvent vs une élève / des élèves)"
            },
            {
                "id": "FC3-296",
                "parent": "FC3-279",
                "text": "Approfondir sa maîtrise de la conjugaison "
            },
            {
                "id": "FC3-297",
                "parent": "FC3-296",
                "text": "Connaître la composition du passé composé en deux parties (auxiliaire + participe passé) ; retrouver la forme infinitive du verbe "
            },
            {
                "id": "FC3-298",
                "parent": "FC3-296",
                "text": "Effectuer la transformation à la forme négative d'un verbe au passé composé en insérant les adverbes de négation à leur juste place "
            },
            {
                "id": "FC3-299",
                "parent": "FC3-296",
                "text": "Identifier par une première approche la composition de la terminaison des verbes conjugués : la marque de temps et la marque de personne. "
            },
            {
                "id": "FC3-300",
                "parent": "FC3-296",
                "text": "Les régularités sont mises en évidence et structurées pour aider à la mémorisation et à l'automatisation "
            },
            {
                "id": "FC3-301",
                "parent": "FC3-296",
                "text": "Connaître les marques de personne pour le présent de l'indicatif, l'imparfait et le futur Savoir isoler et connaître les marques de temps de l'imparfait (-ai-, -i-) ; du futur (-r-) "
            },
            {
                "id": "FC3-302",
                "parent": "FC3-296",
                "text": "Mettre en évidence les variations du radical pour certains verbes du premier groupe (verbes dont l'avant-dernière syllabe contient un e muet ou un é, les verbes en -yer, en -eler et -eter, en -cer, -ger) "
            },
            {
                "id": "FC3-303",
                "parent": "FC3-296",
                "text": "Conjugaisons à mémoriser et à maîtriser : présent de l'indicatif, imparfait, futur, passé composé des verbes être et avoir, des verbes du premier et du deuxième groupe et des verbes irréguliers du troisième groupe (faire, aller, dire, venir, pouvoir, voir, vouloir, prendre)"
            },
            {
                "id": "FC3-304",
                "parent": "FC3-250",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "FC3-305",
                "parent": "FC3-304",
                "text": "Identifier les constituants d'une phrase simple"
            },
            {
                "id": "FC3-306",
                "parent": "FC3-305",
                "text": "Connaître les trois types de phrases et leurs formes "
            },
            {
                "id": "FC3-307",
                "parent": "FC3-306",
                "text": "Consolider les objectifs du CM1 avec des corpus de plus en plus complexes"
            },
            {
                "id": "FC3-308",
                "parent": "FC3-305",
                "text": "Analyser une phrase simple "
            },
            {
                "id": "FC3-309",
                "parent": "FC3-308",
                "text": "Consolider l'identification des différents types de sujets rencontrés au CM1 "
            },
            {
                "id": "FC3-310",
                "parent": "FC3-308",
                "text": "Identifier le sujet inversé dans des cas simples "
            },
            {
                "id": "FC3-311",
                "parent": "FC3-308",
                "text": "Consolider l'identification du groupe sujet, groupe verbal, groupe circonstanciel "
            },
            {
                "id": "FC3-312",
                "parent": "FC3-308",
                "text": "Différencier attribut du sujet et complément d'objet "
            },
            {
                "id": "FC3-313",
                "parent": "FC3-308",
                "text": "Différencier complément d'objet direct et complément d'objet indirect "
            },
            {
                "id": "FC3-314",
                "parent": "FC3-308",
                "text": "Différencier les compléments circonstanciels de temps, de lieu, de cause "
            },
            {
                "id": "FC3-315",
                "parent": "FC3-308",
                "text": "Dans le prolongement du CM1, mobiliser les manipulations syntaxiques dans les activités langagières et plus particulièrement lors de la production/amélioration/révision des écrits et dans les activités d'étude de la langue (activités de découverte, exercices d'application et d'entraînement)"
            },
            {
                "id": "FC3-316",
                "parent": "FC3-305",
                "text": "Distinguer les notions de nature/classe grammaticales et de fonction "
            },
            {
                "id": "FC3-317",
                "parent": "FC3-316",
                "text": "Cette compétence se consolide en parallèle avec la compétence "
            },
            {
                "id": "FC3-318",
                "parent": "FC3-316",
                "text": "Analyser une phrase simple Connaître et distinguer les notions de nature et fonction "
            },
            {
                "id": "FC3-319",
                "parent": "FC3-316",
                "text": "Distinguer les natures/classes grammaticales de mots et les natures des groupes fonctionnels"
            },
            {
                "id": "FC3-320",
                "parent": "FC3-305",
                "text": "Identifier les mots, un groupe de mots selon leur nature/classe grammaticale "
            },
            {
                "id": "FC3-321",
                "parent": "FC3-320",
                "text": "Identifier et nommer les prépositions "
            },
            {
                "id": "FC3-322",
                "parent": "FC3-320",
                "text": "Identifier et nommer les conjonctions de subordination (en lien avec l'introduction des phrases complexes) "
            },
            {
                "id": "FC3-323",
                "parent": "FC3-320",
                "text": "Reconnaître les deux types de pronoms personnels (sujet, compléments) "
            },
            {
                "id": "FC3-324",
                "parent": "FC3-320",
                "text": "Identifier les pronoms personnels compléments d'objet "
            },
            {
                "id": "FC3-325",
                "parent": "FC3-320",
                "text": "Connaître les variations du pronom personnel (personne, nombre, fonction)"
            },
            {
                "id": "FC3-326",
                "parent": "FC3-305",
                "text": "Analyser le groupe nominal "
            },
            {
                "id": "FC3-327",
                "parent": "FC3-326",
                "text": "Aborder la notion d'expansion du nom : adjectif et/ou groupe nominal prépositionnel "
            },
            {
                "id": "FC3-328",
                "parent": "FC3-326",
                "text": "Aborder la notion de complément du nom "
            },
            {
                "id": "FC3-329",
                "parent": "FC3-326",
                "text": "Différencier épithète et attribut du sujet"
            },
            {
                "id": "FC3-330",
                "parent": "FC3-304",
                "text": "Se repérer dans la phrase complexe"
            },
            {
                "id": "FC3-331",
                "parent": "FC3-330",
                "text": "Différencier phrase simple et phrase complexe "
            },
            {
                "id": "FC3-332",
                "parent": "FC3-331",
                "text": "Distinguer phrase simple et phrase complexe à partir du repérage des verbes conjugués"
            },
            {
                "id": "FC3-333",
                "parent": "FC3-304",
                "text": "Acquérir l'orthographe grammaticale"
            },
            {
                "id": "FC3-334",
                "parent": "FC3-333",
                "text": "Identifier les classes de mots subissant des variations "
            },
            {
                "id": "FC3-335",
                "parent": "FC3-334",
                "text": "Consolider les capacités à identifier, classer et repérer les variations des classes de mots : déterminant, nom, adjectif, pronom personnel, verbe "
            },
            {
                "id": "FC3-336",
                "parent": "FC3-334",
                "text": "Utiliser les outils de référence à sa disposition pour comprendre et différencier les variations"
            },
            {
                "id": "FC3-337",
                "parent": "FC3-333",
                "text": "Réaliser la chaîne d'accords au sein du groupe nominal "
            },
            {
                "id": "FC3-338",
                "parent": "FC3-337",
                "text": "Consolider la maîtrise de la chaîne d'accords dans le groupe nominal pour les cas les plus réguliers "
            },
            {
                "id": "FC3-339",
                "parent": "FC3-337",
                "text": "Rencontrer quelques variations particulières en contexte, en lien avec les apprentissages en orthographe lexicale"
            },
            {
                "id": "FC3-340",
                "parent": "FC3-333",
                "text": "Accorder le sujet et le verbe "
            },
            {
                "id": "FC3-341",
                "parent": "FC3-340",
                "text": "Repérer les groupes sujets inversés dans un contexte de phrases simples, puis dans des cas plus complexes "
            },
            {
                "id": "FC3-342",
                "parent": "FC3-340",
                "text": "Conjointement à la notion de la fonction d'attribut du sujet, identifier et appliquer la chaîne d'accords sujet/verbe, sujet/attribut du sujet "
            },
            {
                "id": "FC3-343",
                "parent": "FC3-340",
                "text": "Conjugaisons à mémoriser et à maîtriser : passé simple, plus-que-parfait des verbes être et avoir, des verbes des premier et deuxième groupes, des verbes irréguliers du troisième groupe : faire, aller, dire, venir, pouvoir, voir, vouloir, prendre"
            },
            {
                "id": "FC3-344",
                "parent": "FC3-333",
                "text": "Approfondir sa maîtrise de la conjugaison "
            },
            {
                "id": "FC3-345",
                "parent": "FC3-344",
                "text": "Connaître la composition en deux parties (auxiliaire + participe passé) des temps composés (passé composé et plus-que-parfait) "
            },
            {
                "id": "FC3-346",
                "parent": "FC3-344",
                "text": "Accorder le participe passé avec le sujet dans le cas de l'auxiliaire être "
            },
            {
                "id": "FC3-347",
                "parent": "FC3-344",
                "text": "Accorder le participe passé avec le COD pour les verbes étudiés et conjugués avec l'auxiliaire avoir "
            },
            {
                "id": "FC3-348",
                "parent": "FC3-344",
                "text": "Effectuer la transformation à la forme négative d'un verbe aux temps composés en plaçant les adverbes de négation au bon emplacement "
            },
            {
                "id": "FC3-349",
                "parent": "FC3-344",
                "text": "Identifier dans la terminaison des verbes conjugués : la marque de temps et la marque de personne "
            },
            {
                "id": "FC3-350",
                "parent": "FC3-344",
                "text": "Consolider la connaissance des variations du radical pour certains verbes du premier groupe et du troisième groupe"
            },
            {
                "id": "FC3-351",
                "parent": "FC3-250",
                "text": "Sixième"
            },
            {
                "id": "FC3-352",
                "parent": "FC3-351",
                "text": "Identifier les constituants d'une phrase simple"
            },
            {
                "id": "FC3-353",
                "parent": "FC3-352",
                "text": "Analyser une phrase simple "
            },
            {
                "id": "FC3-354",
                "parent": "FC3-353",
                "text": "Consolider les compétences antérieures dans des phrases se complexifiant "
            },
            {
                "id": "FC3-355",
                "parent": "FC3-353",
                "text": "Identifier tous les constituants syntaxiques de la phrase simple étudiés précédemment "
            },
            {
                "id": "FC3-356",
                "parent": "FC3-353",
                "text": "Opposer et distinguer attribut du sujet et complément d'objet direct (COD) "
            },
            {
                "id": "FC3-357",
                "parent": "FC3-353",
                "text": "Utiliser les manipulations syntaxiques et étudier la construction du verbe au service de la reconnaissance des constituants d'une phrase"
            },
            {
                "id": "FC3-358",
                "parent": "FC3-352",
                "text": "Identifier les mots, un groupe de mots selon leur nature "
            },
            {
                "id": "FC3-359",
                "parent": "FC3-358",
                "text": "Identifier aisément les pronoms personnels et préciser leur fonction "
            },
            {
                "id": "FC3-360",
                "parent": "FC3-358",
                "text": "Mettre en relation un pronom personnel avec son antécédent "
            },
            {
                "id": "FC3-361",
                "parent": "FC3-358",
                "text": "Identifier le groupe nominal, quelle que soit sa fonction dans la phrase"
            },
            {
                "id": "FC3-362",
                "parent": "FC3-352",
                "text": "Analyser le groupe nominal "
            },
            {
                "id": "FC3-363",
                "parent": "FC3-362",
                "text": "Identifier et différencier sans ambigüité adjectif/groupe adjectival de fonction épithète et groupe nominal prépositionnel de fonction complément du nom"
            },
            {
                "id": "FC3-364",
                "parent": "FC3-362",
                "text": "Se repérer dans la phrase complexe"
            },
            {
                "id": "FC3-365",
                "parent": "FC3-352",
                "text": "Différencier phrase simple et phrase complexe à partir de la notion de proposition "
            },
            {
                "id": "FC3-366",
                "parent": "FC3-365",
                "text": "Comprendre la notion de proposition "
            },
            {
                "id": "FC3-367",
                "parent": "FC3-365",
                "text": "Distinguer phrase simple et phrase complexe à partir du repérage des propositions"
            },
            {
                "id": "FC3-368",
                "parent": "FC3-352",
                "text": "Repérer les différents modes d'articulation des propositions au sein de la phrase complexe "
            },
            {
                "id": "FC3-369",
                "parent": "FC3-368",
                "text": "Approfondir les notions de juxtaposition, de coordination, de subordination"
            },
            {
                "id": "FC3-370",
                "parent": "FC3-368",
                "text": "Distinguer le rôle de la conjonction de coordination et celui de la conjonction de subordination"
            },
            {
                "id": "FC3-371",
                "parent": "FC3-368",
                "text": "Acquérir l'orthographe grammaticale"
            },
            {
                "id": "FC3-372",
                "parent": "FC3-352",
                "text": "Identifier les classes de mots subissant des variations "
            },
            {
                "id": "FC3-373",
                "parent": "FC3-372",
                "text": "Améliorer son orthographe grammaticale dans le cadre de la production d'écrits ou d'exercices d'entraînement"
            },
            {
                "id": "FC3-374",
                "parent": "FC3-352",
                "text": "Réaliser la chaîne d'accords au sein du groupe nominal "
            },
            {
                "id": "FC3-375",
                "parent": "FC3-374",
                "text": "Maîtriser la chaîne d'accords dans le groupe nominal, en lien avec l'analyse grammaticale"
            },
            {
                "id": "FC3-376",
                "parent": "FC3-352",
                "text": "Accorder le sujet et le verbe "
            },
            {
                "id": "FC3-377",
                "parent": "FC3-376",
                "text": "Identifier le groupe sujet et raisonner sur l'accord sujet/verbe"
            },
            {
                "id": "FC3-378",
                "parent": "FC3-352",
                "text": "Approfondir sa maîtrise de la conjugaison "
            },
            {
                "id": "FC3-379",
                "parent": "FC3-378",
                "text": "Consolider la maîtrise de la conjugaison des temps composés (passé composé et plus-que-parfait). "
            },
            {
                "id": "FC3-380",
                "parent": "FC3-378",
                "text": "Connaître leur composition en deux parties (auxiliaire + participe passé) "
            },
            {
                "id": "FC3-381",
                "parent": "FC3-378",
                "text": "Conjugaisons à mémoriser et à maîtriser : impératif présent, conditionnel présent des verbes être et avoir, des verbes des premier et deuxième groupes, des verbes irréguliers du troisième groupe : faire, aller, dire, venir, pouvoir, voir, vouloir, prendre "
            },
            {
                "id": "FC3-382",
                "parent": "FC3-378",
                "text": "Maîtriser l'accord du participe passé employé avec l'auxiliaire être Accorder le participe passé avec le complément d'objet direct (COD) pour les verbes étudiés et conjugués avec l'auxiliaire avoir (pronom personnel antéposé) "
            },
            {
                "id": "FC3-383",
                "parent": "FC3-378",
                "text": "Connaître les marques des temps étudiés au CM1 et CM2 Identifier les marques de temps pour le conditionnel présent et l'impératif présent "
            },
            {
                "id": "FC3-384",
                "parent": "FC3-378",
                "text": "Maîtriser les variations du radical pour certains verbes du 1er groupe Initier à la notion de valeurs des temps par observation, comparaison, opposition de phrases et textes rencontrés : des temps du discours, puis des temps du récit. "
            },
            {
                "id": "FC3-385",
                "parent": "FC3-378",
                "text": "Quelques valeurs temporelles des temps seront identifiées"
            },

            {
                "id": "EMC",
                "parent": "#",
                "text": "Enseignement moral et civique"
            },
            {
                "id": "EMC-0",
                "parent": "EMC",
                "text": "CP : Se reconnaitre comme individu et élève"
            },
            {
                "id": "EMC-1",
                "parent": "EMC-0",
                "text": "Connaissance et maîtrise de soi"
            },
            {
                "id": "EMC-2",
                "parent": "EMC-1",
                "text": "Comprendre ses émotions et ses sentiments : leur origine et leurs manifestations ;"
            },
            {
                "id": "EMC-3",
                "parent": "EMC-1",
                "text": "trouver les réponses appropriées aux besoins exprimés ;"
            },
            {
                "id": "EMC-4",
                "parent": "EMC-1",
                "text": "consolider sa confiance en soi ;"
            },
            {
                "id": "EMC-5",
                "parent": "EMC-1",
                "text": "acquérir une estime de soi."
            },
            {
                "id": "EMC-6",
                "parent": "EMC-0",
                "text": "Les règles collectives et l'autonomie"
            },
            {
                "id": "EMC-7",
                "parent": "EMC-6",
                "text": "S'approprier les règles de l'école (droits et devoirs), pour soi-même (son propre bien-être et sa propre sécurité) ;"
            },
            {
                "id": "EMC-8",
                "parent": "EMC-6",
                "text": "respecter les différents adultes de l'école en identifiant leur rôle ;"
            },
            {
                "id": "EMC-9",
                "parent": "EMC-6",
                "text": "développer son autonomie ;"
            },
            {
                "id": "EMC-10",
                "parent": "EMC-6",
                "text": "prendre des initiatives personnelles et faire des choix sans craindre de se tromper ;"
            },
            {
                "id": "EMC-11",
                "parent": "EMC-6",
                "text": "identifier les risques et les dangers de son environnement immédiat et adopter un comportement adapté ;"
            },
            {
                "id": "EMC-12",
                "parent": "EMC-6",
                "text": "respecter les équipements de la collectivité, condition du partage de biens communs ;"
            },
            {
                "id": "EMC-13",
                "parent": "EMC-6",
                "text": "savoir que les enfants ont des droits (Convention internationale des droits de l'enfant, 1989)."
            },
            {
                "id": "EMC-14",
                "parent": "EMC-0",
                "text": "Règles d'hygiène et exigence d'intimité"
            },
            {
                "id": "EMC-15",
                "parent": "EMC-14",
                "text": "Avoir conscience de son intégrité ;"
            },
            {
                "id": "EMC-16",
                "parent": "EMC-14",
                "text": "connaître et appliquer les règles élémentaires d'hygiène personnelle ;"
            },
            {
                "id": "EMC-17",
                "parent": "EMC-14",
                "text": "connaître et respecter les règles élémentaires de l'intimité personnelle."
            },
            {
                "id": "EMC-18",
                "parent": "EMC-14",
                "text": "tre élève à l'école de la République"
            },
            {
                "id": "EMC-19",
                "parent": "EMC-14",
                "text": "Identifier le drapeau français ;"
            },
            {
                "id": "EMC-20",
                "parent": "EMC-14",
                "text": "reconnaitre La Marseillaise."
            },
            {
                "id": "EMC-21",
                "parent": "EMC",
                "text": "CE1 : Respecter les autres"
            },
            {
                "id": "EMC-22",
                "parent": "EMC-21",
                "text": "Altérité et sociabilité"
            },
            {
                "id": "EMC-23",
                "parent": "EMC-22",
                "text": "Reconnaitre et prendre en compte les émotions et les sentiments d'autrui ;"
            },
            {
                "id": "EMC-24",
                "parent": "EMC-22",
                "text": "développer sa capacité d'empathie ;"
            },
            {
                "id": "EMC-25",
                "parent": "EMC-22",
                "text": "s'entraider et partager avec les autres ;"
            },
            {
                "id": "EMC-26",
                "parent": "EMC-22",
                "text": "reconnaitre la diversité comme richesse et ne pas faire des différences (sociales, physiques, culturelles, de genre) un motif de violence ;"
            },
            {
                "id": "EMC-27",
                "parent": "EMC-22",
                "text": "faire comprendre que la solidarité et l'entraide, en lien avec la notion de fraternité, permettent un renforcement de la notion d'égalité entre les personnes."
            },
            {
                "id": "EMC-28",
                "parent": "EMC-21",
                "text": "Règles collectives et prise d'initiative"
            },
            {
                "id": "EMC-29",
                "parent": "EMC-28",
                "text": "Connaître et appliquer les règles élémentaires de vie, de communication et d'échange en collectivité : l'idée de civilité ;"
            },
            {
                "id": "EMC-30",
                "parent": "EMC-28",
                "text": "identifier les dangers au sein des situations dans lesquelles on se trouve ;"
            },
            {
                "id": "EMC-31",
                "parent": "EMC-28",
                "text": "prendre des initiatives (faire des choix, les justifier)."
            },
            {
                "id": "EMC-32",
                "parent": "EMC-21",
                "text": "Principes et symboles de la République"
            },
            {
                "id": "EMC-33",
                "parent": "EMC-32",
                "text": "Identifier les symboles républicains ;"
            },
            {
                "id": "EMC-34",
                "parent": "EMC-32",
                "text": "apprendre à chanter le 1er couplet et le refrain de La Marseillaise ;"
            },
            {
                "id": "EMC-35",
                "parent": "EMC-32",
                "text": "comprendre la devise « Liberté, Égalité, Fraternité » ;"
            },
            {
                "id": "EMC-36",
                "parent": "EMC-32",
                "text": "aborder le principe de la liberté de conscience ;"
            },
            {
                "id": "EMC-37",
                "parent": "EMC-32",
                "text": "savoir que le français est la langue de la République."
            },
            {
                "id": "EMC-38",
                "parent": "EMC",
                "text": "CE2 : Apprendre ensemble et vivre ensemble"
            },
            {
                "id": "EMC-39",
                "parent": "EMC-38",
                "text": "L'engagement pour le bien commun"
            },
            {
                "id": "EMC-40",
                "parent": "EMC-39",
                "text": "Sensibiliser à la notion de bien commun et amener les élèves à prendre conscience que les actions individuelles doivent tenir compte de l'intérêt collectif ;"
            },
            {
                "id": "EMC-41",
                "parent": "EMC-39",
                "text": "savoir qu'il existe des institutions et des associations au service du bien commun ;"
            },
            {
                "id": "EMC-42",
                "parent": "EMC-39",
                "text": "aborder des enjeux d'intérêt collectif : l'éducation pour tous, l'environnement, la sécurité, l'information."
            },
            {
                "id": "EMC-43",
                "parent": "EMC-38",
                "text": "La République et son fonctionnement"
            },
            {
                "id": "EMC-44",
                "parent": "EMC-43",
                "text": "Savoir qu'en France le chef de l'État est le président de la République et qu'il est élu ;"
            },
            {
                "id": "EMC-45",
                "parent": "EMC-43",
                "text": "savoir que le maire est un élu local, et le représentant de l'État dans la commune ; connaître son rôle à la tête de la collectivité (état civil, école, environnement) ;"
            },
            {
                "id": "EMC-46",
                "parent": "EMC-43",
                "text": "approfondir la compréhension de la devise « Liberté, Égalité, Fraternité »."
            },
            {
                "id": "EMC-47",
                "parent": "EMC",
                "text": "CM1 : Faire société"
            },
            {
                "id": "EMC-48",
                "parent": "EMC-47",
                "text": "Civisme et citoyenneté"
            },
            {
                "id": "EMC-49",
                "parent": "EMC-48",
                "text": "Définir le civisme comme l'action d'un individu en fonction du bien public et dans le respect des règles ;"
            },
            {
                "id": "EMC-50",
                "parent": "EMC-48",
                "text": "aborder des exemples de comportement civique dans la classe, l'école, dans la vie quotidienne, en ligne, et en faveur de l'environnement ;"
            },
            {
                "id": "EMC-51",
                "parent": "EMC-48",
                "text": "connaître et appliquer les règles de civilité en société ; identifier les incivilités et comprendre pourquoi elles nuisent à la vie en commun ;"
            },
            {
                "id": "EMC-52",
                "parent": "EMC-48",
                "text": "apprendre la signification du terme « démocratie » et le fonctionnement du suffrage direct."
            },
            {
                "id": "EMC-53",
                "parent": "EMC-47",
                "text": "L'égalité dans la dignité"
            },
            {
                "id": "EMC-54",
                "parent": "EMC-53",
                "text": "Comprendre la notion d'égalité en droit ;"
            },
            {
                "id": "EMC-55",
                "parent": "EMC-53",
                "text": "comprendre ce qu'implique le principe de dignité de la personne humaine."
            },
            {
                "id": "EMC-56",
                "parent": "EMC-47",
                "text": "Comment faire société"
            },
            {
                "id": "EMC-57",
                "parent": "EMC-56",
                "text": "Comprendre la notion de fraternité, valeur et principe de la République ;"
            },
            {
                "id": "EMC-58",
                "parent": "EMC-56",
                "text": "comprendre ce qu'implique et permet l'empathie."
            },
            {
                "id": "EMC-59",
                "parent": "EMC",
                "text": "CM2 : Vivre en république"
            },
            {
                "id": "EMC-60",
                "parent": "EMC-59",
                "text": "Citoyenneté et nationalité"
            },
            {
                "id": "EMC-61",
                "parent": "EMC-60",
                "text": "Connaître les conditions d'acquisition de la nationalité française : montrer le lien étroit entre citoyenneté et nationalité. Un citoyen bénéficie de droits civils, puis politiques à sa majorité, et tout individu bénéficie de droits civils ;"
            },
            {
                "id": "EMC-62",
                "parent": "EMC-60",
                "text": "connaître le rôle politique des citoyennes et des citoyens : ils ont vocation à participer à la vie politique du pays et à l'évolution des institutions (découverte des procédures générales d'élaboration de la loi) ;"
            },
            {
                "id": "EMC-63",
                "parent": "EMC-60",
                "text": "connaître les devoirs du citoyen et de toute personne résidant sur le territoire national : respecter les lois, contribuer à financer les dépenses publiques. Chaque citoyen doit respecter les droits des autres qui sont identiques aux siens (Déclaration des droits de l'homme et du citoyen, art. 3 et 13) ;"
            },
            {
                "id": "EMC-64",
                "parent": "EMC-60",
                "text": "comprendre que le terme de devoir peut aussi désigner une réalité plus morale, qui doit guider le citoyen dans son comportement dans l'espace public ;"
            },
            {
                "id": "EMC-65",
                "parent": "EMC-60",
                "text": "connaître et comprendre les symboles républicains mentionnés par la Constitution : drapeau, hymne, devise, et d'autres coutumiers comme Marianne ; connaître la fête nationale du 14 juillet (héritière de la Fête de la Fédération de 1790) ; comprendre la nécessité de respecter ces symboles ;"
            },
            {
                "id": "EMC-66",
                "parent": "EMC-60",
                "text": "savoir que la République française est membre de l'Union européenne (UE)."
            },
            {
                "id": "EMC-67",
                "parent": "EMC-59",
                "text": "Libertés et droits fondamentaux"
            },
            {
                "id": "EMC-68",
                "parent": "EMC-67",
                "text": "Faire connaître les droits et libertés fondamentaux institués par la Déclaration des droits de l'homme et du citoyen (1789), la Déclaration universelle des droits de l'homme (1948) et la Charte des droits fondamentaux de l'Union européenne (2000) ;"
            },
            {
                "id": "EMC-69",
                "parent": "EMC-67",
                "text": "mettre en avant certains droits politiques, économiques et sociaux qui en découlent : suffrage universel, droit à l'emploi, à la protection de la santé, à la gratuité de l'enseignement public, accès à la culture, droits environnementaux (Charte de l'environnement) ;"
            },
            {
                "id": "EMC-70",
                "parent": "EMC-67",
                "text": "montrer que les droits fondamentaux s'exercent dans le cadre de la loi (exemple de la liberté d'expression) ;"
            },
            {
                "id": "EMC-71",
                "parent": "EMC-67",
                "text": "approfondir avec les droits dits « de troisième génération », qui résultent du droit de chacun de « vivre dans un environnement équilibré et respectueux de la santé » (art. 1er de la Charte de l'environnement)."
            },
            {
                "id": "EMC-72",
                "parent": "EMC-59",
                "text": "Respecter les droits de tous"
            },
            {
                "id": "EMC-73",
                "parent": "EMC-72",
                "text": "Montrer que la lutte contre les discriminations suppose la déconstruction des préjugés et des stéréotypes ;"
            },
            {
                "id": "EMC-74",
                "parent": "EMC-72",
                "text": "faire reconnaitre les atteintes aux personnes : le racisme, l'antisémitisme, le sexisme, la xénophobie, l'homophobie, le harcèlement ; savoir que l'expression des discriminations est sanctionnée par la loi."
            },
            {
                "id": "EMC-75",
                "parent": "EMC-74",
                "text": "l'école laïque"
            },
            {
                "id": "EMC-76",
                "parent": "EMC-72",
                "text": "Le respect des croyances est assuré, mais, comme ailleurs, leur expression est limitée par la loi. Celle-ci protège les élèves de toute influence religieuse et préserve leur liberté de conscience ;"
            },
            {
                "id": "EMC-77",
                "parent": "EMC-72",
                "text": "nul ne peut être discriminé pour sa croyance ou ses convictions, mais nul n'a non plus le droit d'imposer ses croyances ou ses convictions aux autres."
            },
            {
                "id": "EMC-78",
                "parent": "EMC",
                "text": "Sixième : Apprendre à vivre dans une société démocratique"
            },
            {
                "id": "EMC-79",
                "parent": "EMC-78",
                "text": "Représenter les autres et servir l'intérêt général"
            },
            {
                "id": "EMC-80",
                "parent": "EMC-79",
                "text": "Les représentantes et représentants, choisis par un vote, portent la parole des autres, participent à des délibérations collectives et à la prise de décision ;"
            },
            {
                "id": "EMC-81",
                "parent": "EMC-75",
                "text": "toutes les échelles (classe, collège, commune, département, région, pays, Union européenne), ils répondent à des besoins collectifs : éducation, santé, secours, transport, enjeux du développement durable et de la transition écologique ;"
            },
            {
                "id": "EMC-82",
                "parent": "EMC-79",
                "text": "l'intérêt général est l'intérêt commun de tous les membres de la société. Il n'est pas toujours compatible avec les intérêts de chacun ;"
            },
            {
                "id": "EMC-83",
                "parent": "EMC-79",
                "text": "dans une perspective de développement durable, la définition de l'intérêt général prend en compte les générations futures ;"
            },
            {
                "id": "EMC-84",
                "parent": "EMC-79",
                "text": "les représentants élus sont responsables : ils expriment la parole des électeurs et suivent les règles des assemblées et des conseils dans lesquels ils sont élus."
            },
            {
                "id": "EMC-85",
                "parent": "EMC-78",
                "text": "Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École"
            },
            {
                "id": "EMC-86",
                "parent": "EMC-85",
                "text": "La laïcité garantit la liberté de conscience et l'égalité de toutes les citoyennes et tous les citoyens, quelles que soient leurs croyances ou opinions ; la neutralité de l'État à l'égard des religions et le libre exercice des cultes (loi de 1905) ;"
            },
            {
                "id": "EMC-87",
                "parent": "EMC-85",
                "text": "la liberté de conscience est celle de croire, celle de ne pas croire, celle aussi de changer de croyance ou de religion ;"
            },
            {
                "id": "EMC-88",
                "parent": "EMC-85",
                "text": "la laïcité est un principe juridique et non une opinion, elle diffère par conséquent de l'athéisme ou de l'agnosticisme, qui constituent des options philosophiques personnelles ;"
            },
            {
                "id": "EMC-89",
                "parent": "EMC-85",
                "text": "la laïcité à l'école protège la liberté de choix de chaque enfant : elle crée un espace neutre à l'abri des prosélytismes (loi du 15 mars 2004 ; Charte de la laïcité) ;"
            },
            {
                "id": "EMC-90",
                "parent": "EMC-85",
                "text": "dans ce but, la laïcité impose des règles à tous les membres de la communauté scolaire, elle prépare les élèves à vivre dans une communauté nationale où différentes opinions philosophiques et religieuses peuvent s'exprimer et être discutées dans le cadre de la loi."
            },
            {
                "id": "EMC-91",
                "parent": "EMC-78",
                "text": "Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée"
            },
            {
                "id": "EMC-92",
                "parent": "EMC-91",
                "text": "L'enfant comme l'adulte a droit au respect de sa vie privée (CIDE, DDHC et Charte des droits fondamentaux de l'Union européenne) ;"
            },
            {
                "id": "EMC-93",
                "parent": "EMC-91",
                "text": "le droit au respect de la vie privée comprend le droit à l'intimité et la protection du droit à l'image ;"
            },
            {
                "id": "EMC-94",
                "parent": "EMC-91",
                "text": "l'intimité d'une personne recouvre la vie affective et sexuelle de cette personne ;"
            },
            {
                "id": "EMC-95",
                "parent": "EMC-91",
                "text": "ce droit doit être également respecté dans l'univers numérique et les réseaux sociaux (majorité numérique, données personnelles, traces numériques, réputation numérique)."
            },
            {
                "id": "EMC-96",
                "parent": "EMC",
                "text": "Cinquième : Égalité, fraternité et solidarité"
            },
            {
                "id": "EMC-97",
                "parent": "EMC-96",
                "text": "Agir pour l'égalité femmes-hommes et lutter contre les discriminations"
            },
            {
                "id": "EMC-98",
                "parent": "EMC-97",
                "text": "L'égalité entre les femmes et les hommes est un principe fondamental de la République française, garanti par la Constitution (article 3 du préambule de 1946 : « La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. ») et des démocraties modernes, c'est aussi un objectif de développement durable (ODD5) ;"
            },
            {
                "id": "EMC-99",
                "parent": "EMC-97",
                "text": "dans la vie professionnelle et quotidienne, de nombreuses inégalités demeurent et les violences sexistes et sexuelles persistent, qui nécessitent l'action des pouvoirs publics et de la société civile ;"
            },
            {
                "id": "EMC-100",
                "parent": "EMC-97",
                "text": "la discrimination est un délit qui contrevient au principe d'égalité. Le Code pénal définit la discrimination comme « toute distinction opérée entre les personnes physiques » selon des critères liés à leur origine, à leur sexe, orientation sexuelle et identité de genre, à leur nationalité, à leur religion, à leur apparence physique, leur handicap, leur situation de grossesse, leur santé ou leur activité syndicale, etc. (art. 225-1), punie dans certaines situations constituant un traitement défavorable (art. 225-2) ;"
            },
            {
                "id": "EMC-101",
                "parent": "EMC-75",
                "text": "la racine des agissements discriminatoires se trouvent des mécanismes d'exclusion (stéréotypes, préjugés, etc.) qui réduisent l'identité d'un individu à son appartenance à un groupe que l'on stigmatise. On retrouve ces stéréotypes dans le racisme, l'antisémitisme et la xénophobie, punis par la loi ;"
            },
            {
                "id": "EMC-102",
                "parent": "EMC-97",
                "text": "les agissements discriminatoires sont aussi à la racine du harcèlement, y compris du harcèlement en ligne (depuis 2022, le harcèlement scolaire est reconnu comme un délit)."
            },
            {
                "id": "EMC-103",
                "parent": "EMC-96",
                "text": "La solidarité et ses échelles"
            },
            {
                "id": "EMC-104",
                "parent": "EMC-103",
                "text": "Le principe de solidarité signifie que la Nation assure aux individus libres et égaux en droit une protection. Au nom de ce principe, lié à l'idéal de fraternité, l'État, les collectivités territoriales et la société civile (associations) unissent leurs forces pour réduire les inégalités et protéger les citoyennes et les citoyens contre les risques sociaux et environnementaux ;"
            },
            {
                "id": "EMC-105",
                "parent": "EMC-103",
                "text": "l'impôt traduit la participation des citoyennes et des citoyens à la solidarité nationale (impôts directs et indirects) ;"
            },
            {
                "id": "EMC-106",
                "parent": "EMC-103",
                "text": "la solidarité s'exerce également à l'échelle de l'Union européenne et, dans le cadre de l'aide au développement (y compris durable), à l'échelle mondiale (institutions internationales et ONG) ;"
            },
            {
                "id": "EMC-107",
                "parent": "EMC-103",
                "text": "les risques sociaux (maladie, accident, invalidité, grossesse non désirée, perte d'emploi, perte d'autonomie liée à l'âge) sont tous les événements auxquels les individus risquent de ne pouvoir faire face avec leurs seules ressources. La Sécurité sociale et le système public de santé participent de la solidarité nationale ; le droit international garantit aux enfants le droit à la santé et à la sécurité sociale (art. 24 à 26 CIDE) ;"
            },
            {
                "id": "EMC-108",
                "parent": "EMC-103",
                "text": "les risques environnementaux (pollutions, incendies, catastrophes naturelles liées ou non au changement climatique) nécessitent la mobilisation de moyens à toutes les échelles, pour la prévention, la mise en sécurité des personnes, l'aide aux victimes et la reconstruction (loi du 13 août 2004)."
            },
            {
                "id": "EMC-109",
                "parent": "EMC",
                "text": "Quatrième : Défendre les droits et les libertés"
            },
            {
                "id": "EMC-110",
                "parent": "EMC-109",
                "text": "L'État de droit et les libertés"
            },
            {
                "id": "EMC-111",
                "parent": "EMC-110",
                "text": "Les libertés individuelles permettent aux citoyennes et aux citoyens d'être maîtres de leurs mouvements et de leurs choix (liberté de circulation ou de mariage, par exemple), mais aussi de leurs opinions et croyances (liberté d'opinion, liberté de conscience), ainsi que d'exprimer celles-ci (liberté d'expression), y compris en ligne. Les libertés collectives leur permettent de s'associer les uns avec les autres et de s'engager dans la vie de la société (droit de réunion, d'association, de manifestation, droit syndical, liberté de la presse). Il s'agit de libertés fondamentales et de droits inconditionnels associés à l'idée de dignité humaine ;"
            },
            {
                "id": "EMC-112",
                "parent": "EMC-110",
                "text": "nos libertés sont toutefois encadrées par la loi et limitées, en premier lieu par les libertés des autres, que nous n'avons pas le droit d'entraver ou de violer (art. 4 DDHC) ; ensuite par la défense de l'ordre public qui concerne non seulement la sécurité, mais également la tranquillité, la salubrité, le respect de la dignité de la personne humaine, qui permettent à chacun de jouir de ses droits et de ses libertés ;"
            },
            {
                "id": "EMC-113",
                "parent": "EMC-110",
                "text": "les libertés sont garanties par le droit : elles figurent dans le bloc de constitutionnalité reconnu par le Conseil constitutionnel, et l'action de l'État elle-même est soumise à la justice (son action ne peut violer les droits du citoyen) ;"
            },
            {
                "id": "EMC-114",
                "parent": "EMC-110",
                "text": "l'indépendance de la justice est une condition de l'État de droit, son organisation garantissant le traitement équitable des justiciables ;"
            },
            {
                "id": "EMC-115",
                "parent": "EMC-110",
                "text": "les droits et libertés sont enfin garantis par des traités internationaux et leur respect contrôlé par des cours supranationales (Cour européenne des droits de l'homme notamment)."
            },
            {
                "id": "EMC-116",
                "parent": "EMC",
                "text": "Défendre le cadre démocratique : sécurité et défense nationale"
            },
            {
                "id": "EMC-117",
                "parent": "EMC-110",
                "text": "La « sûreté » fait partie des droits affirmés par la Déclaration des droits de l'homme et du citoyen (DDHC, art. 2). Elle signifie à la fois que les droits du citoyen sont protégés et qu'il doit se trouver en sécurité. Les forces de sécurité intérieure, comme la police, la gendarmerie, les pompiers et les douanes, répondent à cette exigence ;"
            },
            {
                "id": "EMC-118",
                "parent": "EMC-110",
                "text": "les forces armées ont vocation à défendre la souveraineté nationale, qui peut se trouver menacée ; elles ont aussi pour mission de servir la Nation quand elle est engagée par des traités ou comme membre d'organisations internationales comme l'ONU. La défense doit également affronter de nouveaux enjeux comme la guerre informationnelle et la cyberdéfense ;"
            },
            {
                "id": "EMC-119",
                "parent": "EMC-110",
                "text": "la police de l'environnement assure la protection du droit de chacun à vivre dans un environnement « sain et équilibré »."
            },
            {
                "id": "EMC-120",
                "parent": "EMC-116",
                "text": "Troisième : Faire vivre la démocratie"
            },
            {
                "id": "EMC-121",
                "parent": "EMC-120",
                "text": "Les règles du jeu démocratique"
            },
            {
                "id": "EMC-122",
                "parent": "EMC-121",
                "text": "La Constitution, norme juridique fondamentale, garantit les droits et libertés, détermine la séparation des pouvoirs, ainsi que le contrôle de l'action du gouvernement par le Parlement ;"
            },
            {
                "id": "EMC-123",
                "parent": "EMC-121",
                "text": "la Constitution de la Ve République fait référence à d'autres textes qui ont une valeur constitutionnelle (DDHC, préambule de la Constitution de 1946, Charte de l'environnement) ;"
            },
            {
                "id": "EMC-124",
                "parent": "EMC-121",
                "text": "elle affirme que la République est laïque, ce qui signifie que l'autorité politique est indépendante des autorités religieuses. Toutefois, ces dernières peuvent participer au débat public dans les limites fixées par la loi (art. 35.1 et 36.3 de la loi de 1905) ;"
            },
            {
                "id": "EMC-125",
                "parent": "EMC-121",
                "text": "depuis 1958, elle a été l'objet de plusieurs modifications qui témoignent du caractère évolutif de la République française, notamment pour prendre en compte les enjeux environnementaux (Charte de l'environnement) ;"
            },
            {
                "id": "EMC-126",
                "parent": "EMC-121",
                "text": "depuis l'après-guerre, la démocratie française s'inscrit dans les institutions du Conseil de l'Europe et de l'UE, qui élargissent le champ du débat et définissent une citoyenneté européenne. Au sein de l'UE, les États membres sont tenus d'appliquer le droit communautaire (traités, règlements, directives, décisions de la Cour de justice de l'UE)."
            },
            {
                "id": "EMC-127",
                "parent": "EMC-120",
                "text": "Les acteurs du jeu démocratique et leur engagement (1) : l'opinion"
            },
            {
                "id": "EMC-128",
                "parent": "EMC-127",
                "text": "La démocratie est un régime où l'opinion publique joue un rôle capital, qui s'exprime par l'intermédiaire des médias, dont les médias sociaux, et qu'on essaie de saisir par des sondages de natures diverses ;"
            },
            {
                "id": "EMC-129",
                "parent": "EMC-127",
                "text": "l'information constitue donc un enjeu essentiel, tout particulièrement à l'ère du numérique et avec l'émergence des « intelligences artificielles » ;"
            },
            {
                "id": "EMC-130",
                "parent": "EMC-127",
                "text": "les médias sociaux sont eux aussi le lieu de débats et de mobilisations. Dans ce contexte, des lanceurs d'alerte prennent des risques pour informer leurs concitoyennes et leurs concitoyens."
            },
            {
                "id": "EMC-131",
                "parent": "EMC-120",
                "text": "Les acteurs du jeu démocratique et leur engagement (2) : l'engagement collectif"
            },
            {
                "id": "EMC-132",
                "parent": "EMC-131",
                "text": "Les campagnes électorales et les campagnes référendaires sont des occasions de débats (entre tous les citoyens, comme entre ceux qui sont déjà ou aspirent à être des représentants politiques) et des moments décisifs de la vie démocratique – le vote n'étant pas obligatoire, mais marquant un engagement au sein de la cité ;"
            },
            {
                "id": "EMC-133",
                "parent": "EMC-131",
                "text": "les formes traditionnelles de l'engagement demeurent décisives : engagement politique et exercice d'un mandat, engagement syndical, engagement associatif ou humanitaire, démocratie scolaire ;"
            },
            {
                "id": "EMC-134",
                "parent": "EMC-131",
                "text": "l'engagement dans les institutions (armée, police, justice, éducation) ;"
            },
            {
                "id": "EMC-135",
                "parent": "EMC-131",
                "text": "l'exercice de la liberté de manifester permet aux citoyennes et aux citoyens d'exprimer leurs opinions et de faire pression sur les gouvernements."
            },

            {
                "id": "EVAR",
                "parent": "#",
                "text": "Programme d'éducation à la vie affective et relationnelle à l'école élémentaire"
            },
            {
                "id": "EVAR-0",
                "parent": "EVAR",
                "text": "Cours préparatoire"
            },
            {
                "id": "EVAR-1",
                "parent": "EVAR-0",
                "text": "Se connaître, vivre et grandir avec son corps"
            },
            {
                "id": "EVAR-2",
                "parent": "EVAR-1",
                "text": "Connaître son corps. Comprendre ce qu'est l'intimité."
            },
            {
                "id": "EVAR-3",
                "parent": "EVAR-2",
                "text": "Nommer les parties du corps, dont les parties intimes, avec un vocabulaire scientifique précis."
            },
            {
                "id": "EVAR-4",
                "parent": "EVAR-2",
                "text": "Identifier les points communs et les différences physiques entre les filles et les garçons."
            },
            {
                "id": "EVAR-5",
                "parent": "EVAR-2",
                "text": "Définir ce qu'est son intimité (corps, pensées, écrits) et celle des autres."
            },
            {
                "id": "EVAR-6",
                "parent": "EVAR-2",
                "text": "Comprendre que toute personne a le droit au respect de son intimité."
            },
            {
                "id": "EVAR-7",
                "parent": "EVAR-2",
                "text": "Développer sa connaissance de soi."
            },
            {
                "id": "EVAR-8",
                "parent": "EVAR-0",
                "text": "Rencontrer les autres et construire des relations, s'y épanouir"
            },
            {
                "id": "EVAR-9",
                "parent": "EVAR-8",
                "text": "Comprendre la diversité des émotions et des sentiments : les siens et ceux des autres."
            },
            {
                "id": "EVAR-10",
                "parent": "EVAR-9",
                "text": "Comprendre, identifier et nommer ses sentiments et ses émotions, savoir les gérer."
            },
            {
                "id": "EVAR-11",
                "parent": "EVAR-9",
                "text": "Exprimer ses sentiments et ses émotions de façon appropriée."
            },
            {
                "id": "EVAR-12",
                "parent": "EVAR-9",
                "text": "Résoudre des conflits de façon constructive."
            },
            {
                "id": "EVAR-13",
                "parent": "EVAR-0",
                "text": "Trouver sa place dans la société, y être libre et responsable"
            },
            {
                "id": "EVAR-14",
                "parent": "EVAR-13",
                "text": "Appartenir à une famille, comprendre la nature, la fonction et le sens des liens familiaux."
            },
            {
                "id": "EVAR-15",
                "parent": "EVAR-14",
                "text": "Identifier différents liens familiaux, se rendre compte de la diversité des structures familiales."
            },
            {
                "id": "EVAR-16",
                "parent": "EVAR-14",
                "text": "Respecter la diversité des structures familiales."
            },
            {
                "id": "EVAR-17",
                "parent": "EVAR-14",
                "text": "Développer la connaissance de soi et les liens sociaux."
            },
            {
                "id": "EVAR-18",
                "parent": "EVAR",
                "text": "Cours élémentaire première année"
            },
            {
                "id": "EVAR-19",
                "parent": "EVAR-18",
                "text": "Se connaître, vivre et grandir avec son corps"
            },
            {
                "id": "EVAR-20",
                "parent": "EVAR-19",
                "text": "Grandir, avoir une bonne connaissance et estime de soi, protéger son intimité."
            },
            {
                "id": "EVAR-21",
                "parent": "EVAR-20",
                "text": "Comprendre que la croissance entraîne des changements physiques."
            },
            {
                "id": "EVAR-22",
                "parent": "EVAR-20",
                "text": "Prendre conscience que chaque personne a un corps unique et qu'il existe des différences en termes de taille, de morphologie, de fonctionnement et de caractéristiques, etc."
            },
            {
                "id": "EVAR-23",
                "parent": "EVAR-20",
                "text": "Apprendre à respecter son corps, celui des autres, leurs différences, leur singularité."
            },
            {
                "id": "EVAR-24",
                "parent": "EVAR-20",
                "text": "Savoir protéger son intimité : préserver son intimité, c'est pouvoir créer un espace où l'on se sent bien, un espace à soi où l'on peut s'isoler."
            },
            {
                "id": "EVAR-25",
                "parent": "EVAR-20",
                "text": "Développer une bonne connaissance de soi."
            },
            {
                "id": "EVAR-26",
                "parent": "EVAR-18",
                "text": "Rencontrer les autres et construire des relations, s'y épanouir"
            },
            {
                "id": "EVAR-27",
                "parent": "EVAR-26",
                "text": "Comprendre les différentes dimensions (affectives, éthiques, sociales et légales) d'une relation humaine."
            },
            {
                "id": "EVAR-28",
                "parent": "EVAR-27",
                "text": "Identifier et différencier plusieurs types de sentiments et de relations amoureuses et amicales."
            },
            {
                "id": "EVAR-29",
                "parent": "EVAR-27",
                "text": "Décrire les principales composantes d'une relation positive (par exemple, la confiance, l'échange, le respect, le soutien, l'empathie et l'entraide)."
            },
            {
                "id": "EVAR-30",
                "parent": "EVAR-27",
                "text": "Prendre conscience que le genre, le handicap ou l'état de santé ne sont pas un obstacle pour nouer des amitiés."
            },
            {
                "id": "EVAR-31",
                "parent": "EVAR-27",
                "text": "Comprendre qu'il est possible d'apprécier et aimer qui on veut, d'avoir et d'exprimer ses préférences, et prendre conscience de l'importance de respecter les différences."
            },
            {
                "id": "EVAR-32",
                "parent": "EVAR-27",
                "text": "Identifier ses droits et ses devoirs au travers d'exemples simples."
            },
            {
                "id": "EVAR-33",
                "parent": "EVAR-18",
                "text": "Trouver sa place dans la société, y être libre et responsable"
            },
            {
                "id": "EVAR-34",
                "parent": "EVAR-33",
                "text": "Promouvoir des relations égalitaires, repérer des discriminations issues de stéréotypes, notamment de genre."
            },
            {
                "id": "EVAR-35",
                "parent": "EVAR-34",
                "text": "Savoir définir et repérer des stéréotypes, notamment de genre, et des discriminations."
            },
            {
                "id": "EVAR-36",
                "parent": "EVAR-34",
                "text": "Prendre conscience que les stéréotypes, notamment de genre, varient selon les lieux et les époques."
            },
            {
                "id": "EVAR-37",
                "parent": "EVAR-34",
                "text": "Prendre conscience que les stéréotypes peuvent entraîner des préjugés et des discriminations."
            },
            {
                "id": "EVAR-38",
                "parent": "EVAR-34",
                "text": "Développer des relations sociales constructives (comportements tels que l'acceptation, la collaboration, la coopération, l'entraide)."
            },
            {
                "id": "EVAR-39",
                "parent": "EVAR-34",
                "text": "Savoir penser de façon critique (biais, influences)."
            },
            {
                "id": "EVAR-40",
                "parent": "EVAR",
                "text": "Cours élémentaire deuxième année"
            },
            {
                "id": "EVAR-41",
                "parent": "EVAR-40",
                "text": "Se connaître, vivre et grandir avec son corps"
            },
            {
                "id": "EVAR-42",
                "parent": "EVAR-41",
                "text": "Se sentir bien dans son corps et en prendre soin."
            },
            {
                "id": "EVAR-43",
                "parent": "EVAR-42",
                "text": "Prendre conscience de l'importance d'apprécier et de prendre soin de son corps."
            },
            {
                "id": "EVAR-44",
                "parent": "EVAR-42",
                "text": "Développer sa capacité d'attention à soi."
            },
            {
                "id": "EVAR-45",
                "parent": "EVAR-44",
                "text": "tre capable de repérer les comportements favorables à sa santé et apprendre à faire des choix favorables à soi et aux autres."
            },
            {
                "id": "EVAR-46",
                "parent": "EVAR-42",
                "text": "Savoir demander de l'aide."
            },
            {
                "id": "EVAR-47",
                "parent": "EVAR-40",
                "text": "Rencontrer les autres et construire des relations, s'y épanouir"
            },
            {
                "id": "EVAR-48",
                "parent": "EVAR-47",
                "text": "Comprendre ce qu'est le consentement, les différentes manières de le solliciter et de l'exprimer ou d'accepter et de respecter un refus."
            },
            {
                "id": "EVAR-49",
                "parent": "EVAR-48",
                "text": "Définir ce qu'est le consentement, savoir comment l'exprimer, comment refuser."
            },
            {
                "id": "EVAR-50",
                "parent": "EVAR-48",
                "text": "Savoir quoi faire lorsqu'on hésite entre « oui » et « non »."
            },
            {
                "id": "EVAR-51",
                "parent": "EVAR-48",
                "text": "Comprendre que chaque personne a droit au respect de son corps de la part de toute personne (jeune ou adulte, familière ou non familière) et prendre conscience qu'il existe des mots et des gestes déplacés ou abusifs, qui font violence à l'intégrité personnelle et corporelle."
            },
            {
                "id": "EVAR-52",
                "parent": "EVAR-48",
                "text": "Savoir identifier un adulte de confiance et où chercher de l'aide."
            },
            {
                "id": "EVAR-53",
                "parent": "EVAR-48",
                "text": "Savoir demander de l'aide."
            },
            {
                "id": "EVAR-54",
                "parent": "EVAR-48",
                "text": "Développer des relations sociales constructives."
            },
            {
                "id": "EVAR-55",
                "parent": "EVAR-40",
                "text": "Trouver sa place dans la société, y être libre et responsable"
            },
            {
                "id": "EVAR-56",
                "parent": "EVAR-55",
                "text": "Connaître ses droits."
            },
            {
                "id": "EVAR-57",
                "parent": "EVAR-56",
                "text": "Connaître ses droits et reconnaître que chaque individu a des droits fondamentaux qui doivent être reconnus."
            },
            {
                "id": "EVAR-58",
                "parent": "EVAR-56",
                "text": "Savoir ce qu'est la Convention internationale des droits de l'enfant."
            },
            {
                "id": "EVAR-59",
                "parent": "EVAR-56",
                "text": "Prendre conscience du rôle que chacune et chacun peut avoir dans le respect de la diversité et de la différence."
            },
            {
                "id": "EVAR-60",
                "parent": "EVAR",
                "text": "Cours moyen première année"
            },
            {
                "id": "EVAR-61",
                "parent": "EVAR-60",
                "text": "Se connaître, vivre et grandir avec son corps"
            },
            {
                "id": "EVAR-62",
                "parent": "EVAR-61",
                "text": "Connaître les changements de son corps."
            },
            {
                "id": "EVAR-63",
                "parent": "EVAR-62",
                "text": "Connaître les principaux changements à la puberté."
            },
            {
                "id": "EVAR-64",
                "parent": "EVAR-62",
                "text": "Prendre conscience que ces changements sont normaux et apprendre à les respecter."
            },
            {
                "id": "EVAR-65",
                "parent": "EVAR-62",
                "text": "Comprendre qu'il est important de se sentir bien dans son corps et de l'écouter."
            },
            {
                "id": "EVAR-66",
                "parent": "EVAR-62",
                "text": "Comprendre que la puberté se produit à des âges différents selon les individus et qu'elle n'a pas les mêmes effets."
            },
            {
                "id": "EVAR-67",
                "parent": "EVAR-62",
                "text": "Comprendre pourquoi se moquer de quelqu'un est un comportement néfaste."
            },
            {
                "id": "EVAR-68",
                "parent": "EVAR-62",
                "text": "Apprendre à parler des autres et aux autres de manière positive."
            },
            {
                "id": "EVAR-69",
                "parent": "EVAR-60",
                "text": "Rencontrer les autres et construire des relations, s'y épanouir"
            },
            {
                "id": "EVAR-70",
                "parent": "EVAR-69",
                "text": "Apprendre à développer des relations constructives et à repérer les situations de harcèlement."
            },
            {
                "id": "EVAR-71",
                "parent": "EVAR-70",
                "text": "Développer sa capacité d'écoute et l'attention portée aux autres."
            },
            {
                "id": "EVAR-72",
                "parent": "EVAR-70",
                "text": "Résoudre des conflits de façon constructive."
            },
            {
                "id": "EVAR-73",
                "parent": "EVAR-70",
                "text": "Exprimer son consentement ou son refus."
            },
            {
                "id": "EVAR-74",
                "parent": "EVAR-70",
                "text": "Définir et reconnaître le harcèlement et ses différentes formes, en particulier le harcèlement sexiste et sexuel."
            },
            {
                "id": "EVAR-75",
                "parent": "EVAR-70",
                "text": "Comprendre que tout acte de harcèlement ou d'intimidation est irrespectueux et néfaste, qu'il a des conséquences graves et peut être sanctionné par la loi."
            },
            {
                "id": "EVAR-76",
                "parent": "EVAR-70",
                "text": "Prendre conscience que les victimes n'en sont jamais responsables et qu'il est de la responsabilité de chaque témoin de signaler les actes de harcèlement ou d'intimidation."
            },
            {
                "id": "EVAR-77",
                "parent": "EVAR-70",
                "text": "Savoir où et comment demander de l'aide pour soi ou autrui."
            },
            {
                "id": "EVAR-78",
                "parent": "EVAR-60",
                "text": "Trouver sa place dans la société, y être libre et responsable"
            },
            {
                "id": "EVAR-79",
                "parent": "EVAR-78",
                "text": "Promouvoir des relations égalitaires et positives ; comprendre les stéréotypes pour lutter contre les discriminations."
            },
            {
                "id": "EVAR-80",
                "parent": "EVAR-79",
                "text": "Définir ce que sont les stéréotypes et les préjugés."
            },
            {
                "id": "EVAR-81",
                "parent": "EVAR-79",
                "text": "Comprendre en quoi les stéréotypes et les représentations liées au genre ont une influence sur la manière dont les individus vivent leur vie et peuvent être à l'origine de discriminations."
            },
            {
                "id": "EVAR-82",
                "parent": "EVAR-79",
                "text": "Agir pour lutter contre les stéréotypes, les préjugés et les discriminations. "
            },
            {
                "id": "EVAR-83",
                "parent": "EVAR-79",
                "text": "Comprendre qu'on peut choisir librement une activité ou un métier (qu'on soit une fille ou un garçon) en fonction de ses motivations ou de ses compétences. "
            },
            {
                "id": "EVAR-84",
                "parent": "EVAR-79",
                "text": "Se sentir libre de ses choix pour une activité ou une passion."
            },
            {
                "id": "EVAR-85",
                "parent": "EVAR-79",
                "text": "Savoir penser de façon critique : apprendre à résister à la pression sociale sans préjugés ni discriminations."
            },
            {
                "id": "EVAR-86",
                "parent": "EVAR",
                "text": "Cours moyen deuxième année"
            },
            {
                "id": "EVAR-87",
                "parent": "EVAR-86",
                "text": "Se connaître, vivre et grandir avec son corps"
            },
            {
                "id": "EVAR-88",
                "parent": "EVAR-87",
                "text": "Connaître et comprendre les changements de son corps et celui des autres."
            },
            {
                "id": "EVAR-89",
                "parent": "EVAR-88",
                "text": "Connaître les changements du corps lors de la puberté et savoir qu'ils ne se produisent pas au même moment chez tous les enfants."
            },
            {
                "id": "EVAR-90",
                "parent": "EVAR-88",
                "text": "Nommer le nom et la fonction des organes reproducteurs."
            },
            {
                "id": "EVAR-91",
                "parent": "EVAR-88",
                "text": "Apprendre scientifiquement ce que sont les menstruations (règles) et qu'elles sont une composante normale et naturelle du développement physique des filles, et ne doivent pas faire l'objet de tabous ou de moqueries."
            },
            {
                "id": "EVAR-92",
                "parent": "EVAR-86",
                "text": "Rencontrer les autres et construire des relations, s'y épanouir"
            },
            {
                "id": "EVAR-93",
                "parent": "EVAR-92",
                "text": "Promouvoir des relations positives, apprendre à repérer et se protéger des violences sexistes et sexuelles."
            },
            {
                "id": "EVAR-94",
                "parent": "EVAR-93",
                "text": "Savoir que les relations entre individus peuvent traduire différents types de relations affectives (par exemple, l'affection entre amis, l'amour entre parents, l'amour au sein de la famille, l'amour entre partenaires) et qu'il existe des façons différentes d'exprimer son amour."
            },
            {
                "id": "EVAR-95",
                "parent": "EVAR-93",
                "text": "Nommer divers sentiments qui peuvent être éprouvés dans les relations interpersonnelles."
            },
            {
                "id": "EVAR-96",
                "parent": "EVAR-93",
                "text": "Exprimer ses émotions."
            },
            {
                "id": "EVAR-97",
                "parent": "EVAR-93",
                "text": "Demander et s'assurer du consentement ; exprimer son consentement ou son refus ; comprendre et respecter le refus des autres."
            },
            {
                "id": "EVAR-98",
                "parent": "EVAR-93",
                "text": "Comprendre qu'il existe des mots et des gestes qui constituent des violences : violences verbales, physiques, psychologiques, sexistes, sexuelles (dont l'inceste) ; savoir identifier ces situations et percevoir les relations d'emprise."
            },
            {
                "id": "EVAR-99",
                "parent": "EVAR-93",
                "text": "Prendre conscience que les violences sexuelles, quel qu'en soit l'auteur, constituent toujours une violation des droits humains et que les victimes n'en sont jamais responsables."
            },
            {
                "id": "EVAR-100",
                "parent": "EVAR-93",
                "text": "Savoir comment chercher de l'aide et du soutien lorsque l'on est victime de violences."
            },
            {
                "id": "EVAR-101",
                "parent": "EVAR-86",
                "text": "Trouver sa place dans la société, y être libre et responsable"
            },
            {
                "id": "EVAR-102",
                "parent": "EVAR-101",
                "text": "Prévenir les risques liés à l'usage du numérique et d'Internet."
            },
            {
                "id": "EVAR-103",
                "parent": "EVAR-102",
                "text": "Comprendre ce qu'est la majorité numérique et son objectif de protection des enfants."
            },
            {
                "id": "EVAR-104",
                "parent": "EVAR-102",
                "text": "Devenir acteur de sa protection sur Internet et savoir identifier un adulte de confiance à qui s'adresser si quelque chose qui a été vu sur Internet ou sur les réseaux sociaux perturbe ou fait peur."
            },
            {
                "id": "EVAR-105",
                "parent": "EVAR-102",
                "text": "Prendre conscience que l'utilisation d'Internet et des réseaux sociaux présente des dangers et nécessite des mesures particulières, notamment car des images et des médias sexuellement explicites, interdits pour les mineurs, violents et choquants y sont accessibles."
            },
            { "id": "LV", "parent": "#", "text": "Langues vivantes" },
            { "id": "LVC2", "parent": "LV", "text": "CYCLE 2" },
            { "id": "j1_332", "parent": "LVC2", "text": "Activités langagières" },
            { "id": "j1_333", "parent": "j1_332", "text": "Comprendre l'oral" },
            { "id": "j1_337", "parent": "j1_333", "text": "comprendre les consignes de classe" },
            { "id": "j1_362", "parent": "j1_333", "text": "utiliser quelques mots familiers et quelques expressions très courantes" },
            { "id": "j1_363", "parent": "j1_333", "text": "suivre le fil d'une histoire très courte" },
            { "id": "j1_364", "parent": "j1_333", "text": "suivre des instructions très courtes et très simples" },
            { "id": "j1_365", "parent": "j1_333", "text": "répertoire élèmentaire de mots et d'expressions simples relatifs à des situations concrètes particulières" },
            { "id": "j1_334", "parent": "j1_332", "text": "S'exprimer oralement en continu" },
            { "id": "j1_338", "parent": "j1_334", "text": "reproduire un modèle oral" },
            { "id": "j1_366", "parent": "j1_334", "text": "utiliser des expressions courtes ou phrases proches des modèles rencontrés lors des apprentissages pour se décrire" },
            { "id": "j1_367", "parent": "j1_334", "text": "lire à haute voix de manière expressive un texte bref" },
            { "id": "j1_368", "parent": "j1_334", "text": "raconter une histoire courte à partir d'images ou de modèles déjà rencontrés" },
            { "id": "j1_369", "parent": "j1_334", "text": "répertoire élèmentaire de mots sur les lieux d'habitation et les personnes de l'entourage de l'enfant" },
            { "id": "j1_370", "parent": "j1_334", "text": "syntaxe de la description simple" },
            { "id": "j1_335", "parent": "j1_332", "text": "Prendre part à une conversation" },
            { "id": "j1_339", "parent": "j1_335", "text": "saluer, se présenter" },
            { "id": "j1_371", "parent": "j1_335", "text": "demander à quelqu'un de ses nouvelles, réagir, et donner de ses nouvelles" },
            { "id": "j1_372", "parent": "j1_335", "text": "formuler des souhaits basiques" },
            { "id": "j1_373", "parent": "j1_335", "text": "utiliser des formules de politesse" },
            { "id": "j1_374", "parent": "j1_335", "text": "répondre à des questions sur des sujets familiers" },
            { "id": "j1_375", "parent": "j1_335", "text": "épeler des mots et des noms familiers" },
            { "id": "j1_376", "parent": "j1_335", "text": "répertoire élèmentaire de mots sur des sujets familiers" },
            { "id": "j1_377", "parent": "j1_335", "text": "syntaxe de conversation simple (question-réponse)" },
            { "id": "j1_378", "parent": "j1_335", "text": "situations de communication" },
            { "id": "LVC3", "parent": "LV", "text": "CYCLE 3" },
            { "id": "JF111", "parent": "JF11", "text": "Écouter et comprendre" },
            { "id": "JF1111", "parent": "JF111", "text": "Comprendre l'ensemble des consignes utilisées en classe." },
            { "id": "JF1112", "parent": "JF111", "text": "Suivre les instructions données." },
            { "id": "JF1113", "parent": "JF111", "text": "Comprendre des mots familiers et des expressions courantes." },
            { "id": "JF1114", "parent": "JF111", "text": "Suivre le fil d'une histoire simple (conte, légende...)." },
            { "id": "JF1115", "parent": "JF111", "text": "Identifier le sujet d'un message oral de courte durée." },
            { "id": "JF1116", "parent": "JF111", "text": "Comprendre et extraire l'information essentielle d'un message oral de courte durée." },
            { "id": "JF112", "parent": "JF11", "text": "Lire et comprendre" },
            { "id": "JF1121", "parent": "JF112", "text": "Comprendre des textes courts et simples (consignes, correspondance, poésie, recette, texte informatif, texte de fiction…) accompagnés d'un document visuel, en s'appuyant sur des éléments connus." },
            { "id": "JF113", "parent": "JF11", "text": "Parler en continu" },
            { "id": "JF1131", "parent": "JF113", "text": "Reproduire un modèle oral (répéter, réciter...)." },
            { "id": "JF1132", "parent": "JF113", "text": "Lire à haute voix et de manière expressive un texte bref." },
            { "id": "JF1133", "parent": "JF113", "text": "Se présenter oralement et présenter les autres." },
            { "id": "JF1134", "parent": "JF113", "text": "Décrire son environnement quotidien, des personnes et/ou des activités culturellement connotées." },
            { "id": "JF1135", "parent": "JF113", "text": "Raconter une histoire courte à l'aide de supports visuels." },
            { "id": "JF1136", "parent": "JF113", "text": "Faire une brève annonce (date, anniversaire, invitation...) en situant l'évènement dans le temps et l'espace." },
            { "id": "JF114", "parent": "JF11", "text": "Écrire" },
            { "id": "JF1141", "parent": "JF114", "text": "Copier des mots isolés et des textes courts ;" },
            { "id": "JF1142", "parent": "JF114", "text": "Écrire sous la dictée des expressions connues ;" },
            { "id": "JF1143", "parent": "JF114", "text": "Renseigner un questionnaire." },
            { "id": "JF1144", "parent": "JF114", "text": "Produire de manière autonome quelques phrases sur soi-même, les autres, des personnages réels ou imaginaires." },
            { "id": "JF1145", "parent": "JF114", "text": "Décrire des objets, des lieux." },
            { "id": "JF1146", "parent": "JF114", "text": "Raconter succinctement des expériences vécues ou imaginées." },
            { "id": "JF1147", "parent": "JF114", "text": "Rédiger un courrier court et simple, en référence à des modèles (message électronique, carte postale, lettre)." },
            { "id": "JF115", "parent": "JF11", "text": "Réagir et dialoguer" },
            { "id": "JF1151", "parent": "JF115", "text": "Établir un contact social (saluer, se présenter, présenter quelqu'un...)." },
            { "id": "JF1152", "parent": "JF115", "text": "Demander à quelqu'un de ses nouvelles et réagir en utilisant des formules de politesse." },
            { "id": "JF1153", "parent": "JF115", "text": "Dialoguer pour échanger / obtenir des renseignements (itinéraire, horaire, prix...)." },
            { "id": "JF1154", "parent": "JF115", "text": "Dialoguer sur des sujets familiers (école, loisirs, maison...)." },
            { "id": "JF1155", "parent": "JF115", "text": "Réagir à des propositions, dans des situations de la vie courante (remercier, féliciter, présenter des excuses, accepter, refuser...)." },
            { "id": "JF12", "parent": "LVC3", "text": "Activités culturelles et linguistiques" },
            { "id": "JF121", "parent": "JF12", "text": "Lexique" },
            { "id": "JF1211", "parent": "JF121", "text": "La personne et la vie quotidienne" },
            { "id": "JF12111", "parent": "JF1211", "text": "Le corps humain, les vêtements, les modes de vie." },
            { "id": "JF12112", "parent": "JF1211", "text": "Le portrait physique et moral." },
            { "id": "JF12113", "parent": "JF1211", "text": "L'environnement urbain." },
            { "id": "JF1212", "parent": "JF121", "text": "Des repères géographiques, historiques et culturels des villes, pays et régions dont on étudie la langue" },
            { "id": "JF12121", "parent": "JF1212", "text": "Leur situation géographique." },
            { "id": "JF12122", "parent": "JF1212", "text": "Les caractéristiques physiques et repères culturels." },
            { "id": "JF12123", "parent": "JF1212", "text": "Quelques figures historiques, contemporaines." },
            { "id": "JF12124", "parent": "JF1212", "text": "Quelques grandes pages d'histoire spécifiques de l'aire étudiée." },
            { "id": "JF1213", "parent": "JF121", "text": "L'imaginaire" },
            { "id": "JF12131", "parent": "JF1213", "text": "Littérature de jeunesse." },
            { "id": "JF12132", "parent": "JF1213", "text": "Contes, mythes et légendes du pays ou de la région." },
            { "id": "JF12133", "parent": "JF1213", "text": "Héros/héroïnes et personnages de fiction, de BD, de séries et de cinéma." },
            { "id": "JF122", "parent": "JF12", "text": "Grammaire" },
            { "id": "JF1221", "parent": "JF122", "text": "Le groupe verbal" },
            { "id": "JF1222", "parent": "JF122", "text": "Le groupe nominal" },
            { "id": "JF1223", "parent": "JF122", "text": "La phrase" },
            { "id": "JF12231", "parent": "JF1223", "text": "type et forme de phrase : déclarative, interrogative, exclamative, impérative, affirmative, négative ;" },
            { "id": "JF12232", "parent": "JF1223", "text": "La syntaxe élémentaire de la phrase simple : ordre des mots, quelques mots de liaison (et, ou...) ;" },
            { "id": "JF12233", "parent": "JF1223", "text": "Quelques subordonnants dans des énoncés dits « complexes » (parce que...)." },
            { "id": "JF123", "parent": "JF12", "text": "Phonologie" },
            { "id": "JF1231", "parent": "JF123", "text": "Phonèmes - percevoir et reproduire les phonèmes spécifiques à chaque langue." },
            { "id": "JF1232", "parent": "JF123", "text": "Accents et rythme - percevoir et restituer le" },
            { "id": "JF1233", "parent": "JF123", "text": "Intonation - percevoir et restituer les schémas intonatifs : l'intonation caractéristique des différents types d'énoncés." },
            { "id": "JF1234", "parent": "JF123", "text": "Lien phonie/graphie - l'alphabet (selon les langues)." },
            { "id": "EA", "parent": "#", "text": "Enseignements artistiques" },
            { "id": "EAC2", "parent": "EA", "text": "CYCLE 2" },
            { "id": "j1_62", "parent": "EAC2", "text": "Arts plastiques" },
            { "id": "j1_64", "parent": "j1_62", "text": "La représentation du monde" },
            { "id": "j1_345", "parent": "j1_64", "text": "utiliser le dessin dans toute sa diversité comme moyen d'expression" },
            { "id": "j1_346", "parent": "j1_64", "text": "employer divers outils dont ceux numériques pour représenter" },
            { "id": "j1_347", "parent": "j1_64", "text": "prendre en compte l'influence de ces outils, supports, matériaux, gestes sur la représentations en 2D et 3D" },
            { "id": "j1_348", "parent": "j1_64", "text": "connaître diverses formes artistiques de représentation du monde (oeuvres contemporaines, du passé, occidentales, extra-occidentales...)" },
            { "id": "j1_336", "parent": "j1_62", "text": "L'expression des émotions" },
            { "id": "j1_342", "parent": "j1_336", "text": "exprimer sa sensibilité et son imagination en s'emparant des élèments de langage plastique" },
            { "id": "j1_349", "parent": "j1_336", "text": "expérimenter les effets des couleurs, des matériaux... en explorant l'organisation et la composition plastiques" },
            { "id": "j1_350", "parent": "j1_336", "text": "exprimer ses émotions et sa sensibilité en confrontant sa perception à celle d'autres élèves" },
            { "id": "j1_343", "parent": "j1_62", "text": "La narration et le témoignage par les images" },
            { "id": "j1_352", "parent": "j1_343", "text": "réaliser des productions plastiques pour raconter, témoigner" },
            { "id": "j1_353", "parent": "j1_343", "text": "transformer ou restructurer des images ou des objets" },
            { "id": "j1_354", "parent": "j1_343", "text": "articuler le texte et l'image à des fins d'illustration et de création" },
            { "id": "j1_63", "parent": "EAC2", "text": "Education musicale" },
            { "id": "j1_65", "parent": "j1_63", "text": "Chanter" },
            { "id": "j1_381", "parent": "j1_65", "text": "reproduire un modèle mélodique, rythmique" },
            { "id": "j1_382", "parent": "j1_65", "text": "chanter une mélodie simple avec une intonation juste " },
            { "id": "j1_383", "parent": "j1_65", "text": "chanter une comptine, un chant par imitation" },
            { "id": "j1_384", "parent": "j1_65", "text": "interpréter un chant avec expressivité en respectant ses phrases musicales" },
            { "id": "j1_385", "parent": "j1_65", "text": "mobiliser son corps pour interpréter" },
            { "id": "j1_386", "parent": "j1_65", "text": "les principaux registres vocaux" },
            { "id": "j1_387", "parent": "j1_65", "text": "éléments constitutifs d'une production vocale " },
            { "id": "j1_388", "parent": "j1_65", "text": "répertoire varié de chansons et de comptines" },
            { "id": "j1_389", "parent": "j1_65", "text": "éléments de vocabulaire concernant l'usage musicale de la voix" },
            { "id": "j1_66", "parent": "j1_63", "text": "Ecouter, comparer" },
            { "id": "j1_390", "parent": "j1_66", "text": "décrire et comparer les éléments sonores; repérer, y compris dans la nature, des sons et des suites musicales; identifier des élèments communs et contrastés" },
            { "id": "j1_391", "parent": "j1_66", "text": "repérer une organisation simple : récurrence d'une mélodie, d'un motif rythmique, d'un thème..." },
            { "id": "j1_392", "parent": "j1_66", "text": "comparer des musiques et identifier des ressemblances et des différences" },
            { "id": "j1_393", "parent": "j1_66", "text": "lexique élémentaire pour décrire la musique (timbre, hauteur, intensité, tempo...)" },
            { "id": "j1_394", "parent": "j1_66", "text": "quelques grandes oeuvres du patrimoine " },
            { "id": "j1_395", "parent": "j1_66", "text": "repères simples dans l'espace et le temps" },
            { "id": "j1_67", "parent": "j1_63", "text": "Explorer, imaginer" },
            { "id": "j1_396", "parent": "j1_67", "text": "expérimenter les paramètres du son (intensité, hauteur, timbre, durée...)" },
            { "id": "j1_397", "parent": "j1_67", "text": "imaginer des représentations graphiques ou corporelles de la musique" },
            { "id": "j1_398", "parent": "j1_67", "text": "inventer une organisation simple à partir d'élèments sonores travaillés" },
            { "id": "j1_399", "parent": "j1_67", "text": "éléments de vocabulaire liés aux paramètres du son (intensité, hauteur, timbre, durée...)" },
            { "id": "j1_400", "parent": "j1_67", "text": "posture du musicien (écouter, respecter l'autre, jouer ensemble)" },
            { "id": "j1_401", "parent": "j1_67", "text": "diversité des matériaux sonores" },
            { "id": "j1_380", "parent": "j1_63", "text": "Echanger, partager" },
            { "id": "j1_402", "parent": "j1_380", "text": "exprimer ses émotions, ses sentiments et ses préférences artistiques" },
            { "id": "j1_403", "parent": "j1_380", "text": "écouter et respecter l'avis des autres et l'expression de leur sensibilité" },
            { "id": "j1_404", "parent": "j1_380", "text": "respecter les règles et les exigences d'une production musicale collective" },
            { "id": "j1_405", "parent": "j1_380", "text": "vocabulaire adapté à l'expression de son avis" },
            { "id": "j1_406", "parent": "j1_380", "text": "conditions d'un travail collectif (concentration, écoute, respect...)" },
            { "id": "j1_407", "parent": "j1_380", "text": "règles et contraintes du travail collectif" },
            { "id": "EAC3", "parent": "EA", "text": "CYCLE 3" },
            { "id": "JF2", "parent": "EAC3", "text": "Arts plastiques" },
            { "id": "JF21", "parent": "JF2", "text": "La représentation plastique et les dispositifs de présentation" },
            { "id": "JF211", "parent": "JF21", "text": "La ressemblance " },
            { "id": "JF212", "parent": "JF21", "text": "L'autonomie du geste graphique, pictural, sculptural " },
            { "id": "JF213", "parent": "JF21", "text": "Les différentes catégories d'images, leurs procédés de fabrication, leurs transformations " },
            { "id": "JF214", "parent": "JF21", "text": "La narration visuelle " },
            { "id": "JF215", "parent": "JF21", "text": "La mise en regard et en espace " },
            { "id": "JF216", "parent": "JF21", "text": "La prise en compte du spectateur, de l'effet recherché" },
            { "id": "JF22", "parent": "JF2", "text": "Les fabrications et la relation entre l'objet et l'espace" },
            { "id": "JF221", "parent": "JF22", "text": "L'hétérogénéité et la cohérence plastiques " },
            { "id": "JF222", "parent": "JF22", "text": "L'invention, la fabrication, les détournements, les mises en scène des objets" },
            { "id": "JF223", "parent": "JF22", "text": "L'espace en trois dimensions " },
            { "id": "JF23", "parent": "JF2", "text": "La matérialité de la production plastique et la sensibilité aux constituants de l'oeuvre" },
            { "id": "JF231", "parent": "JF23", "text": "La réalité concrète d'une production ou d'une oeuvre " },
            { "id": "JF232", "parent": "JF23", "text": "Les qualités physiques des matériaux " },
            { "id": "JF233", "parent": "JF23", "text": "Les effets du geste et de l'instrument" },
            { "id": "JF234", "parent": "JF23", "text": "La matérialité et la qualité de la couleur " },
            { "id": "JF3", "parent": "EAC3", "text": "Éducation musicale" },
            { "id": "JF31", "parent": "JF3", "text": "Chanter et interpréter" },
            { "id": "JF311", "parent": "JF31", "text": "Reproduire et interpréter un modèle mélodique et rythmique." },
            { "id": "JF312", "parent": "JF31", "text": "Chanter une mélodie simple avec une intonation juste et une intention expressive." },
            { "id": "JF313", "parent": "JF31", "text": "Mémoriser et chanter par coeur un chant appris par imitation, soutenir un bref moment de chant en solo." },
            { "id": "JF314", "parent": "JF31", "text": "Interpréter un chant avec expressivité en respectant plusieurs choix et contraintes précédemment indiqués." },
            { "id": "JF315", "parent": "JF31", "text": "Tenir sa partie dans un bref moment de polyphonie." },
            { "id": "JF316", "parent": "JF31", "text": "Mobiliser son corps pour interpréter, le cas échéant avec des instruments." },
            { "id": "JF317", "parent": "JF31", "text": "Identifier les difficultés rencontrées dans l'interprétation d'un chant." },
            { "id": "JF3171", "parent": "JF317", "text": "Répertoire de chansons diverses." },
            { "id": "JF3172", "parent": "JF317", "text": "Paramètres du son et techniques vocales pour en jouer de façon expressive." },
            { "id": "JF3173", "parent": "JF317", "text": "Vocabulaire de l'expression : quelques nuances simples, tempo, caractère, etc." },
            { "id": "JF3174", "parent": "JF317", "text": "Polyphonie : rôle complémentaire des parties simultanées." },
            { "id": "JF3175", "parent": "JF317", "text": "Interprétation d'une musique : compréhension du terme et usage approprié à propos d'une oeuvre écoutée et d'une musique produite en classe." },
            { "id": "JF32", "parent": "JF3", "text": "Écouter, comparer et commenter" },
            { "id": "JF321", "parent": "JF32", "text": "Décrire et comparer des éléments sonores issus de contextes musicaux, d'aires géographiques ou culturelles différents et dans un temps historique, contemporain, proche ou lointain." },
            { "id": "JF322", "parent": "JF32", "text": "Identifier et nommer ressemblances et différences dans deux extraits musicaux." },
            { "id": "JF323", "parent": "JF32", "text": "Repérer et nommer une organisation simple dans un extrait musical : répétition d'une mélodie, d'un motif rythmique, d'un thème, d'une partie caractéristique, etc. ; en déduire une forme simple (couplet/refrain, ABA par exemple)." },
            { "id": "JF324", "parent": "JF32", "text": "Associer la découverte d'une oeuvre à des connaissances construites dans d'autres domaines enseignés." },
            { "id": "JF3241", "parent": "JF324", "text": "Vocabulaire simple pour décrire la musique." },
            { "id": "JF3242", "parent": "JF324", "text": "Méthodes pour comparer des musiques." },
            { "id": "JF3243", "parent": "JF324", "text": "Repères simples dans le temps et dans l'espace." },
            { "id": "JF3244", "parent": "JF324", "text": "Quelques grandes oeuvres du patrimoine." },
            { "id": "JF3245", "parent": "JF324", "text": "Principales caractéristiques de l'orchestre symphonique." },
            { "id": "JF3246", "parent": "JF324", "text": "Formes de production variées : vocales, instrumentales, solistes." },
            { "id": "JF33", "parent": "JF3", "text": "Explorer, imaginer et créer" },
            { "id": "JF331", "parent": "JF33", "text": "Expérimenter les paramètres du son et en imaginer en conséquence des utilisations possibles." },
            { "id": "JF332", "parent": "JF33", "text": "Imaginer des représentations graphiques pour organiser une succession de sons et d'événements sonores." },
            { "id": "JF333", "parent": "JF33", "text": "Inventer une organisation simple à partir de sources sonores sélectionnées (dont la voix) et l'interpréter." },
            { "id": "JF3331", "parent": "JF333", "text": "Développement du lexique pour décrire le son instrumental, le son vocal et les objets sonores dans les domaines de la hauteur, du timbre, de la durée, de l'intensité." },
            { "id": "JF3332", "parent": "JF333", "text": "Diversité des matériaux sonores et catégories classées par caractéristiques dominantes." },
            { "id": "JF3333", "parent": "JF333", "text": "Les postures de l'explorateur du son puis du compositeur : produire, écouter, trier, choisir, organiser, composer. " },
            { "id": "JF3334", "parent": "JF333", "text": "Le projet graphique (partition adaptée pour organiser la mémoire) et sa traduction sonore." },
            { "id": "JF3335", "parent": "JF333", "text": "Les exigences de la musique collective : écoute de l'autre, respect de ses propositions." },
            { "id": "JF34", "parent": "JF3", "text": "Échanger, partager et argumenter" },
            { "id": "JF341", "parent": "JF34", "text": "Exprimer ses gouts au-delà de son ressenti immédiat." },
            { "id": "JF342", "parent": "JF34", "text": "Écouter et respecter le point de vue des autres et l'expression de leur sensibilité." },
            { "id": "JF343", "parent": "JF34", "text": "Argumenter un jugement sur une musique tout en respectant celui des autres." },
            { "id": "JF344", "parent": "JF34", "text": "Argumenter un choix dans la perspective d'une interprétation collective." },
            { "id": "JF3441", "parent": "JF344", "text": "Notions de respect, de bienveillance, de tolérance." },
            { "id": "JF3442", "parent": "JF344", "text": "Vocabulaire adapté à l'expression et l'argumentation de son point de vue personnel sur la musique." },
            { "id": "JF3443", "parent": "JF344", "text": "Conditions d'un travail collectif : concentration, écoute, respect, autoévaluation, etc." },
            { "id": "JF3444", "parent": "JF344", "text": "Règles et contraintes du travail musical collectif visant l'expression d'un avis partagé comme une production sonore de qualité." },
            { "id": "JF4", "parent": "EAC3", "text": "Histoire des arts" },
            { "id": "JF41", "parent": "JF4", "text": "Donner un avis argumenté sur ce que représente ou exprime une oeuvre d'art" },
            { "id": "JF411", "parent": "JF41", "text": "Identifier des personnages mythologiques ou religieux, des objets, des types d'espaces, des éclairages." },
            { "id": "JF412", "parent": "JF41", "text": "Résumer une action représentée en image, déroulée sur scène ou sur un écran, et en caractériser les personnages." },
            { "id": "JF413", "parent": "JF41", "text": "Caractériser un morceau de musique en termes simples." },
            { "id": "JF4131", "parent": "JF413", "text": "Connaissance de mythes antiques et récits fondateurs, notamment bibliques." },
            { "id": "JF4132", "parent": "JF413", "text": "Caractéristiques et spécificités des discours (raconter, décrire, expliquer, argumenter, résumer, etc.)." },
            { "id": "JF4133", "parent": "JF413", "text": "Lexique des émotions" },
            { "id": "JF42", "parent": "JF4", "text": "Dégager d'une oeuvre d'art, par l'observation ou l'écoute, ses principales caractéristiques techniques et formelles" },
            { "id": "JF421", "parent": "JF42", "text": "Identifier des matériaux, y compris sonores, et la manière dont l'artiste leur a donné forme." },
            { "id": "JF422", "parent": "JF42", "text": "Retrouver des formes géométriques et comprendre leur agencement dans une façade, un tableau, un pavement, un tapis." },
            { "id": "JF423", "parent": "JF42", "text": "Dégager d'une forme artistique des éléments de sens." },
            { "id": "JF4231", "parent": "JF423", "text": "Caractéristiques des familles de matériaux." },
            { "id": "JF4232", "parent": "JF423", "text": "Caractéristiques etspécificités des champs artistiques et éléments de lexique correspondants." },
            { "id": "JF43", "parent": "JF4", "text": "Relier des caractéristiques d'une oeuvre d'art à des usages, ainsi qu'au contexte historique et culturel de sa création" },
            { "id": "JF431", "parent": "JF43", "text": "Mettre en relation une ou plusieurs oeuvres contemporaines entre elles et un fait historique, une époque, une aire géographique ou un texte, étudiés en histoire, en géographie ou en français." },
            { "id": "JF432", "parent": "JF43", "text": "Mettre en relation un texte connu (récit, fable, poésie, texte religieux ou mythologique) et plusieurs de ses illustrations ou transpositions visuelles, musicales, scéniques, chorégraphiques ou filmiques, issues de diverses époques, en soulignant le propre du langage de chacune." },
            { "id": "JF433", "parent": "JF43", "text": "Mettre en relation des oeuvres et objets mobiliers et des usages et modes de vie." },
            { "id": "JF4331", "parent": "JF433", "text": "Constitution d'un premier « musée imaginaire » classé par époques." },
            { "id": "JF4332", "parent": "JF433", "text": "Fiche signalétique/cartel pour identifier une oeuvre d'art." },
            { "id": "JF4333", "parent": "JF433", "text": "Premiers éléments de lexique stylistique." },
            { "id": "JF44", "parent": "JF4", "text": "Se repérer dans un musée, un lieu d'art, un site patrimonial" },
            { "id": "JF441", "parent": "JF44", "text": "Effectuer une recherche (dans le cadre d'un exercice collectif et sur la base de consignes précises) en vue de préparer une sortie culturelle." },
            { "id": "JF4411", "parent": "JF441", "text": "Se repérer dans un musée ou un lieu d'art par la lecture et la compréhension des plans et indications." },
            { "id": "JF4412", "parent": "JF441", "text": "Être sensibilisé à la vulnérabilité du patrimoine." },
            { "id": "JF44121", "parent": "JF4412", "text": "Premiers grands principes d'organisation muséale." },
            { "id": "JF44122", "parent": "JF4412", "text": "Métiers de la conservation, de la restauration et de la diffusion." },
            { "id": "JF44123", "parent": "JF4412", "text": "Identification et localisation d'une oeuvre ou d'une salle." },
            { "id": "EPES", "parent": "#", "text": "Education physique et sportive" },
            { "id": "EPESC2", "parent": "EPES", "text": "Cycle 2" },
            { "id": "j1_408", "parent": "EPESC2", "text": "Produire une performance optimale, mesurable à une échéance donnée " },
            { "id": "j1_20", "parent": "j1_408", "text": "transformer sa motricité spontanée pour maîtriser des actions motrices : courir, sauter, lancer" },
            { "id": "j1_37", "parent": "j1_408", "text": "utiliser sa main d'adresse et son pied d'appel, construire une adresse gestuelle et corporelle bilatérale" },
            { "id": "j1_38", "parent": "j1_408", "text": "mobiliser de façon optimale ses ressources pour produire des efforts à des intensités variables" },
            { "id": "j1_39", "parent": "j1_408", "text": "pendant l'action, prendre des repères extérieurs à son corps pour percevoir : espace, temps, durée, effort" },
            { "id": "j1_40", "parent": "j1_408", "text": "respecter les règles de sécurité édictées par le professeur" },
            { "id": "j1_409", "parent": "EPESC2", "text": "Adapter ses déplacements à des environnements variés" },
            { "id": "j1_41", "parent": "j1_409", "text": "transformer sa motricité spontanée pour maitriser des actions motrices" },
            { "id": "j1_42", "parent": "j1_409", "text": "s'engager sans appréhension pour se déplacer dans différents environnements" },
            { "id": "j1_43", "parent": "j1_409", "text": "lire le milieu et adaper ses déplacements à ses contraintes" },
            { "id": "j1_44", "parent": "j1_409", "text": "respecter les règles essentielles de sécurité" },
            { "id": "j1_45", "parent": "j1_409", "text": "reconnaître une situation à risque" },
            { "id": "j1_410", "parent": "EPESC2", "text": "S'exprimer devant les autres par une prestation artistique et/ou acrobatique" },
            { "id": "j1_46", "parent": "j1_410", "text": "s'exposer aux autres : s'engager avec facilité dans des situations d'expression personnelle sans crainte de se montrer" },
            { "id": "j1_47", "parent": "j1_410", "text": "exploiter le pouvoir expressif du corps en transformant sa motricité et en construisant un répertoire d'actions nouvelles à visée esthétique" },
            { "id": "j1_48", "parent": "j1_410", "text": "s'engager en sécurité dans des situations acrobatiques en constuisant de nouveaux pouvoirs moteurs" },
            { "id": "j1_49", "parent": "j1_410", "text": "synchroniser ses actions avec celles de ses partenaires" },
            { "id": "j1_411", "parent": "EPESC2", "text": "Conduire et maîtriser un affrontement collectif ou interindividuel" },
            { "id": "j1_50", "parent": "j1_411", "text": "rechercher le gain du jeu, de la rencontre" },
            { "id": "j1_51", "parent": "j1_411", "text": "comprendre le but du jeu et orienter ses actions vers la cible" },
            { "id": "j1_52", "parent": "j1_411", "text": "accepter l'opposition et la coopération" },
            { "id": "j1_53", "parent": "j1_411", "text": "s'adapter aux actions d'un adversaire" },
            { "id": "j1_54", "parent": "j1_411", "text": "coordonner des actions motrices simples" },
            { "id": "j1_55", "parent": "j1_411", "text": "s'informer, prendre des repères pour agir seul ou avec les autres" },
            { "id": "j1_56", "parent": "j1_411", "text": "respecter les règles essentielles de jeu et de sécurité" },
            { "id": "EPESC3", "parent": "EPES", "text": "Cycle 3" },
            { "id": "JF51", "parent": "EPESC3", "text": "Produire une performance maximale, mesurable à une échéance donnée" },
            { "id": "JF511", "parent": "JF51", "text": "Combiner des actions simples : courir-lancer ; courir-sauter." },
            { "id": "JF5111", "parent": "JF51", "text": "Mobiliser ses ressources pour réaliser la meilleure performance possible dans des activités athlétiques variées (courses, sauts, lancers)." },
            { "id": "JF5112", "parent": "JF51", "text": "Appliquer des principes simples pour améliorer la performance dans des activités athlétiques et/ ou nautiques." },
            { "id": "JF5113", "parent": "JF51", "text": "Utiliser sa vitesse pour aller plus loin, ou plus haut." },
            { "id": "JF5114", "parent": "JF51", "text": "Rester horizontalement et sans appui en équilibre dans l'eau." },
            { "id": "JF5115", "parent": "JF51", "text": "Pendant la pratique, prendre des repères extérieurs et des repères sur son corps pour contrôler son déplacement et son effort." },
            { "id": "JF5116", "parent": "JF51", "text": "Utiliser des outils de mesures simples pour évaluer sa performance." },
            { "id": "JF5117", "parent": "JF51", "text": "Respecter les règles des activités." },
            { "id": "JF5118", "parent": "JF51", "text": "Passer par les différents rôles sociaux." },
            { "id": "JF512", "parent": "EPESC3", "text": "Adapter ses déplacements à des environnements variés" },
            { "id": "JF5121", "parent": "JF512", "text": "Conduire un déplacement sans appréhension et en toute sécurité." },
            { "id": "JF5122", "parent": "JF512", "text": "Adapter son déplacement aux différents milieux." },
            { "id": "JF5123", "parent": "JF512", "text": "Tenir compte du milieu et de ses évolutions (vent, eau, végétation etc.)." },
            { "id": "JF5124", "parent": "JF512", "text": "Gérer son effort pour pouvoir revenir au point de départ." },
            { "id": "JF5125", "parent": "JF512", "text": "Aider l'autre." },
            { "id": "JF513", "parent": "EPESC3", "text": "S'exprimer devant les autres par une prestation artistique et/ou acrobatique" },
            { "id": "JF5131", "parent": "JF513", "text": "Utiliser le pouvoir expressif du corps de différentes façons." },
            { "id": "JF5132", "parent": "JF513", "text": "Enrichir son répertoire d'actions afin de communiquer une intention ou une émotion." },
            { "id": "JF5133", "parent": "JF513", "text": "S'engager dans des actions artistiques ou acrobatiques destinées à être présentées aux autres en maitrisant les risques et ses émotions." },
            { "id": "JF5134", "parent": "JF513", "text": "Mobiliser son imaginaire pour créer du sens et de l'émotion, dans des prestations collectives." },
            { "id": "JF514", "parent": "EPESC3", "text": "Conduire et maitriser un affrontement collectif ou interindividuel" },
            { "id": "JF5141", "parent": "JF514", "text": "Rechercher le gain de l'affrontement par des choix tactiques simples." },
            { "id": "JF5142", "parent": "JF514", "text": "Adapter son jeu et ses actions aux adversaires et à ses partenaires." },
            { "id": "JF5143", "parent": "JF514", "text": "Coordonner des actions motrices simples." },
            { "id": "JF5144", "parent": "JF514", "text": "Se reconnaitre attaquant / défenseur." },
            { "id": "JF5145", "parent": "JF514", "text": "Coopérer pour attaquer et défendre." },
            { "id": "JF5146", "parent": "JF514", "text": "Accepter de tenir des rôles simples d'arbitre et d'observateur." },
            { "id": "JF5147", "parent": "JF514", "text": "S'informer pour agir." },
            { "id": "QLM", "parent": "niveau1", "text": "Questionner le monde" },
            { "id": "QLMC2", "parent": "QLM", "text": "Cycle 2" },
            { "id": "j1_442", "parent": "QLMC2", "text": "Questionner le monde du vivant, de la matière et des objets" },
            { "id": "j1_443", "parent": "j1_442", "text": "Qu'est-ce que la matière?" },
            { "id": "j1_450", "parent": "j1_443", "text": "Identifier les trois états de la matière et observer des changements d'états; Identifier un changement d'état de l'eau dans un phénomène de la vie quotidienne" },
            { "id": "j1_450_1", "parent": "j1_450", "text": "Comparer et mesurer la température, le volume, la masse de l'eau à l'état liquide et à l'état solide." },
            { "id": "j1_450_2", "parent": "j1_450", "text": "Reconnaître les états de l'eau et leur manifestation dans divers phénomènes naturels." },
            { "id": "j1_450_3", "parent": "j1_450", "text": "Mettre en oeuvre des expériences simples impliquant l'eau et/ou l'air." },
            { "id": "j1_450_4", "parent": "j1_450", "text": "Quelques propriétés des solides, des liquides et des gaz." },
            { "id": "j1_450_5", "parent": "j1_450", "text": "Les changements d'états de la matière, notamment solidification, condensation et fusion." },
            { "id": "j1_450_6", "parent": "j1_450", "text": "Les états de l'eau (liquide, glace, vapeur d'eau)." },
            { "id": "j1_450_7", "parent": "j1_450", "text": "Existence, effet et quelques propriétés de l'air (matérialité et compressibilité de l'air)." },
            { "id": "j1_444", "parent": "j1_442", "text": "Comment reconnaître le monde vivant?" },
            { "id": "j1_452", "parent": "j1_444", "text": "Connaître des caractéristiques du monde vivant, ses intéractions, sa diversité" },
            { "id": "j1_453", "parent": "j1_444", "text": "Reconnaître des comportements favorables à sa santé" },
            { "id": "j1_445", "parent": "j1_442", "text": "Les objets techniques : Qu'est-ce que c'est ? À quels besoins répondent-ils ? Comment fonctionnent-ils ?" },
            { "id": "j1_454", "parent": "j1_445", "text": "Comprendre la fonction et le fonctionnement d'objets fabriqués" },
            { "id": "j1_455", "parent": "j1_445", "text": "Réaliser quelques objets et circuits électriques simples, en respectant les règles élémentaires de sécurité" },
            { "id": "j1_456", "parent": "j1_445", "text": "Commencer à s'approprier un environnement numérique" },
            { "id": "j1_446", "parent": "QLMC2", "text": "Questionner l'espace et le temps" },
            { "id": "j1_447", "parent": "j1_446", "text": "Se situer dans l'espace" },
            { "id": "j1_457", "parent": "j1_447", "text": "Se repérer dans l'espace et le représenter" },
            { "id": "j1_458", "parent": "j1_447", "text": "Situer un lieu sur une carte, un globe ou un écran informatique" },
            { "id": "j1_448", "parent": "j1_446", "text": "Se situer dans le temps" },
            { "id": "j1_459", "parent": "j1_448", "text": "Se repérer dans le temps et le mesurer" },
            { "id": "j1_460", "parent": "j1_448", "text": "Repérer et situer quelques évènements dans un temps long" },
            { "id": "j1_449", "parent": "QLMC2", "text": "Explorer les organisations du monde" },
            { "id": "j1_461", "parent": "j1_449", "text": "Comparer les modes de vie" },
            { "id": "j1_464", "parent": "j1_461", "text": "Comparer des modes de vie (alimentation, habitat, vêtements, outils, guerre, déplacements...) à différentes époques ou de différentes cultures." },
            { "id": "j1_465", "parent": "j1_461", "text": "Quelques éléments permettant de comparer des modes de vie : alimentation, habitat, vêtements, outils, guerre, déplacements, etc." },
            { "id": "j1_466", "parent": "j1_461", "text": "Quelques modes de vie des hommes et des femmes et quelques représentations du monde à travers le temps historique." },
            { "id": "j1_467", "parent": "j1_461", "text": "Les modes de vie caractéristiques dans quelques espaces très emblématiques." },
            { "id": "j1_462", "parent": "j1_449", "text": "Comprendre qu'un espace est organisé" },
            { "id": "j1_468", "parent": "j1_462", "text": "découvrir le quartier, le village, la ville : ses principaux espaces et ses principales fonctions" },
            { "id": "j1_469", "parent": "j1_462", "text": "reconnaître différents paysages : les littoraux, les massifs montagneux, les campagnes, les villes, les déserts" },
            { "id": "j1_463", "parent": "j1_449", "text": "Identifier des paysages" },
            { "id": "HG", "parent": "#", "text": "Histoire et Géographie" },
            { "id": "HGC3", "parent": "HG", "text": "Cycle 3" },
            { "id": "JF71", "parent": "HGC3", "text": "Histoire" },
            { "id": "JF711", "parent": "JF71", "text": "Classe de CM1" },
            { "id": "JF7111", "parent": "JF711", "text": "Thème 1 Et avant la France ?" },
            { "id": "JF71111", "parent": "JF7111", "text": "Quelles traces d'une occupation ancienne du territoire français ?" },
            { "id": "JF71112", "parent": "JF7111", "text": "Celtes, Gaulois, Grecs et Romains : quels héritages des mondes anciens ?" },
            { "id": "JF71113", "parent": "JF7111", "text": "Les grands mouvements et déplacements de populations (IV-Xe siècles)." },
            { "id": "JF71114", "parent": "JF7111", "text": "Clovis et Charlemagne, Mérovingiens et Carolingiens dans la continuité de l'empire romain" },
            { "id": "JF7112", "parent": "JF711", "text": "Thème 2 Le temps des rois" },
            { "id": "JF71121", "parent": "JF7112", "text": "Louis IX, le « roi chrétien » au XIIIe siècle" },
            { "id": "JF71122", "parent": "JF7112", "text": "François Ier, un protecteur des Arts et des Lettres à la Renaissance." },
            { "id": "JF71123", "parent": "JF7112", "text": "Henri IV et l'édit de Nantes." },
            { "id": "JF71124", "parent": "JF7112", "text": "Louis XIV, le roi Soleil à Versailles" },
            { "id": "JF7113", "parent": "JF711", "text": "Thème 3 Le temps de la Révolution et de l'Empire" },
            { "id": "JF71131", "parent": "JF7113", "text": "De l'année 1789 à l'exécution du roi : Louis XVI, la Révolution, la Nation." },
            { "id": "JF71132", "parent": "JF7113", "text": "Napoléon Bonaparte, du général à l'Empereur, de la Révolution à l'Empire" },
            { "id": "JF712", "parent": "JF71", "text": "Classe de CM2" },
            { "id": "JF7121", "parent": "JF712", "text": "Thème 1 Le temps de la République" },
            { "id": "JF71211", "parent": "JF7121", "text": "1892 : la République fête ses cent ans" },
            { "id": "JF71212", "parent": "JF7121", "text": "L'école primaire au temps de Jules Ferry" },
            { "id": "JF71213", "parent": "JF7121", "text": "Des républiques, une démocratie : des libertés, des droits et des devoirs" },
            { "id": "JF7122", "parent": "JF712", "text": "Thème 2 L'âge industriel en France" },
            { "id": "JF71221", "parent": "JF7122", "text": "Énergies et machines" },
            { "id": "JF71222", "parent": "JF7122", "text": "Le travail à la mine, à l'usine, à l'atelier, au grand magasin" },
            { "id": "JF71223", "parent": "JF7122", "text": "La ville industrielle" },
            { "id": "JF71224", "parent": "JF7122", "text": "Le monde rural" },
            { "id": "JF7123", "parent": "JF712", "text": "Thème 3 La France, des guerres mondiales à l'Union européenne" },
            { "id": "JF71231", "parent": "JF7123", "text": "Deux guerres mondiales au vingtième siècle" },
            { "id": "JF71232", "parent": "JF7123", "text": "La construction européenne" },
            { "id": "JF713", "parent": "JF71", "text": "Classe de sixième" },
            { "id": "JF7131", "parent": "JF713", "text": "Thème 1 La longue histoire de l'humanité et des migrations" },
            { "id": "JF71311", "parent": "JF7131", "text": "Les débuts de l'humanité" },
            { "id": "JF71312", "parent": "JF7131", "text": "La « révolution » néolithique" },
            { "id": "JF71313", "parent": "JF7131", "text": "Premiers États, premières écritures" },
            { "id": "JF7132", "parent": "JF713", "text": "Thème 2 Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire avant J.-C." },
            { "id": "JF71321", "parent": "JF7132", "text": "Le monde des cités grecques" },
            { "id": "JF71322", "parent": "JF7132", "text": "Rome du mythe à l'histoire" },
            { "id": "JF71323", "parent": "JF7132", "text": "La naissance du monothéisme juif dans un monde polythéiste" },
            { "id": "JF7133", "parent": "JF713", "text": "Thème 3 L'empire romain dans le monde antique" },
            { "id": "JF71331", "parent": "JF7133", "text": "Conquêtes, paix romaine et romanisation" },
            { "id": "JF71332", "parent": "JF7133", "text": "Des chrétiens dans l'Empire" },
            { "id": "JF71333", "parent": "JF7133", "text": "Les relations de l'empire romain avec les autres mondes anciens : l'ancienne route de la soie et la Chine des Han" },
            { "id": "JF72", "parent": "HGC3", "text": "Géographie" },
            { "id": "JF721", "parent": "JF72", "text": "Classe de CM1" },
            { "id": "JF7211", "parent": "JF721", "text": "Thème 1 Découvrir le(s) lieu(x) où j'habite" },
            { "id": "JF72111", "parent": "JF7211", "text": "Identifier les caractéristiques de mon(mes) lieu(x) de vie." },
            { "id": "JF72112", "parent": "JF7211", "text": "Localiser mon (mes) lieu(x) de vie et le(s) situer à différentes échelles." },
            { "id": "JF7212", "parent": "JF721", "text": "Thème 2 Se loger, travailler, se cultiver, avoir des loisirs en France" },
            { "id": "JF72121", "parent": "JF7212", "text": "Dans des espaces urbains." },
            { "id": "JF72122", "parent": "JF7212", "text": "Dans un espace touristique." },
            { "id": "JF7213", "parent": "JF721", "text": "Thème 3 Consommer en France" },
            { "id": "JF72131", "parent": "JF7213", "text": "Satisfaire les besoins en énergie, en eau." },
            { "id": "JF72132", "parent": "JF7213", "text": "Satisfaire les besoins alimentaires." },
            { "id": "JF722", "parent": "JF72", "text": "Classe de CM2" },
            { "id": "JF7221", "parent": "JF722", "text": "Thème 1 Se déplacer" },
            { "id": "JF72211", "parent": "JF7221", "text": "Se déplacer au quotidien en France." },
            { "id": "JF72212", "parent": "JF7221", "text": "Se déplacer au quotidien dans un autre lieu du monde." },
            { "id": "JF72213", "parent": "JF7221", "text": "Se déplacer de ville en ville, en France, en Europe et dans le monde." },
            { "id": "JF7222", "parent": "JF722", "text": "Thème 2 Communiquer d'un bout à l'autre du monde grâce à l'Internet" },
            { "id": "JF72221", "parent": "JF7222", "text": "Un monde de réseaux." },
            { "id": "JF72222", "parent": "JF7222", "text": "Un habitant connecté au monde." },
            { "id": "JF72223", "parent": "JF7222", "text": "Des habitants inégalement connectés dans le monde." },
            { "id": "JF7223", "parent": "JF722", "text": "Thème 3 Mieux habiter" },
            { "id": "JF72231", "parent": "JF7223", "text": "Favoriser la place de la « nature » en ville." },
            { "id": "JF72232", "parent": "JF7223", "text": "Recycler." },
            { "id": "JF72233", "parent": "JF7223", "text": "Habiter un écoquartier ." },
            { "id": "JF723", "parent": "JF72", "text": "Classe de sixième" },
            { "id": "JF7231", "parent": "JF723", "text": "Thème 1 Habiter une métropole" },
            { "id": "JF72311", "parent": "JF7231", "text": "Les métropoles et leurs habitants." },
            { "id": "JF72312", "parent": "JF7231", "text": "La ville de demain." },
            { "id": "JF7232", "parent": "JF723", "text": "Thème 2 Habiter un espace de faible densité" },
            { "id": "JF72321", "parent": "JF7232", "text": "Habiter un espace à forte(s) contrainte(s) naturelle(s) ou/et de grande biodiversité." },
            { "id": "JF72322", "parent": "JF7232", "text": "Habiter un espace de faible densité à vocation agricole." },
            { "id": "JF7233", "parent": "JF723", "text": "Thème 3 Habiter les littoraux" },
            { "id": "JF72331", "parent": "JF7233", "text": "Littoral industrialoportuaire, littoral touristique." },
            { "id": "SET", "parent": "#", "text": "Sciences et Technologie" },
            { "id": "SETC3", "parent": "SET", "text": "Cycle 3" },
            { "id": "JF81", "parent": "SETC3", "text": "Matière, mouvement, énergie, information" },
            { "id": "JF811", "parent": "JF81", "text": "Décrire les états et la constitution de la matière à l'échelle macroscopique" },
            { "id": "JF8111", "parent": "JF811", "text": "Mettre en oeuvre des observations et des expériences pour caractériser un échantillon de matière." },
            { "id": "JF81111", "parent": "JF8111", "text": "Diversité de la matière : métaux, minéraux, verres, plastiques, matière organique sous différentes formes…" },
            { "id": "JF81112", "parent": "JF8111", "text": "L'état physique d'un échantillon de matière dépend de conditions externes, notamment de sa température." },
            { "id": "JF81113", "parent": "JF8111", "text": "Quelques propriétés de la matière solide ou liquide (par exemple : densité, solubilité, élasticité…)." },
            { "id": "JF81114", "parent": "JF8111", "text": "La matière à grande échelle : Terre, planètes, Univers." },
            { "id": "JF81115", "parent": "JF8111", "text": "La masse est une grandeur physique qui caractérise un échantillon de matière." },
            { "id": "JF8112", "parent": "JF811", "text": "Identifier à partir de ressources documentaires les différents constituants d'un mélange." },
            { "id": "JF8113", "parent": "JF811", "text": "Mettre en oeuvre un protocole de séparation de constituants d'un mélange." },
            { "id": "JF81131", "parent": "JF8113", "text": "Réaliser des mélanges peut provoquer des transformations de la matière (dissolution, réaction)." },
            { "id": "JF81132", "parent": "JF8113", "text": "La matière qui nous entoure (à l'état solide, liquide ou gazeux), résultat d'un mélange de différents constituants." },
            { "id": "JF812", "parent": "JF81", "text": "Observer et décrire différents types de mouvements" },
            { "id": "JF8121", "parent": "JF812", "text": "Décrire un mouvement et identifier les différences entre mouvements circulaire ou rectiligne." },
            { "id": "JF81211", "parent": "JF8121", "text": "Mouvement d'un objet (trajectoire et vitesse : unités et ordres de grandeur)." },
            { "id": "JF81212", "parent": "JF8121", "text": "Exemples de mouvements simples : rectiligne, circulaire." },
            { "id": "JF8122", "parent": "JF812", "text": "Élaborer et mettre en oeuvre un protocole pour appréhender la notion de mouvement et de mesure de la valeur de la vitesse d'un objet." },
            { "id": "JF81221", "parent": "JF8122", "text": "Mouvements dont la valeur de la vitesse (module) est constante ou variable (accélération, décélération) dans un mouvement rectiligne." },
            { "id": "JF813", "parent": "JF81", "text": "Identifier différentes sources et connaitre quelques conversions d'énergie" },
            { "id": "JF8131", "parent": "JF813", "text": "Identifier des sources d'énergie et des formes." },
            { "id": "JF81311", "parent": "JF8131", "text": "L'énergie existe sous différentes formes (énergie associée à un objet en mouvement, énergie thermique, électrique…)." },
            { "id": "JF8132", "parent": "JF813", "text": "Prendre conscience que l'être humain a besoin d'énergie pour vivre, se chauffer, se déplacer, s'éclairer…" },
            { "id": "JF8133", "parent": "JF813", "text": "Reconnaitre les situations où l'énergie est stockée, transformée, utilisée. La fabrication et le fonctionnement d'un objet technique nécessitent de l'énergie." },
            { "id": "JF81331", "parent": "JF8133", "text": "Exemples de sources d'énergie utilisées par les êtres humains : charbon, pétrole, bois, uranium, aliments, vent, Soleil, eau et barrage, pile…" },
            { "id": "JF81332", "parent": "JF8133", "text": "Notion d'énergie renouvelable." },
            { "id": "JF81333", "parent": "JF8133", "text": "Identifier quelques éléments d'une chaine d'énergie domestique simple." },
            { "id": "JF81334", "parent": "JF8133", "text": "Quelques dispositifs visant à économiser la consommation d'énergie." },
            { "id": "JF814", "parent": "JF81", "text": "Identifier un signal et une information" },
            { "id": "JF8141", "parent": "JF814", "text": "Identifier différentes formes de signaux (sonores, lumineux, radio…)." },
            { "id": "JF81411", "parent": "JF8141", "text": "Nature d'un signal, nature d'une information, dans une application simple de la vie courante." },
            { "id": "JF82", "parent": "SETC3", "text": "Le vivant, sa diversité et les fonctions qui le caractérisent" },
            { "id": "JF821", "parent": "JF82", "text": "Classer les organismes, exploiter les liens de parenté pour comprendre et expliquer l'évolution des organismes" },
            { "id": "JF8211", "parent": "JF821", "text": "Reconnaitre une cellule" },
            { "id": "JF82111", "parent": "JF8211", "text": "La cellule, unité structurelle du vivant" },
            { "id": "JF8212", "parent": "JF821", "text": "Utiliser différents critères pour classer les êtres vivants ; identifier des liens de parenté entre des organismes." },
            { "id": "JF8213", "parent": "JF821", "text": "Identifier les changements des peuplements de la Terre au cours du temps." },
            { "id": "JF82131", "parent": "JF8213", "text": "Diversités actuelle et passée des espèces." },
            { "id": "JF82132", "parent": "JF8213", "text": "Évolution des espèces vivantes." },
            { "id": "JF822", "parent": "JF82", "text": "Expliquer les besoins variables en aliments de l'être humain ; l'origine et les techniques mises en oeuvre pour transformer et conserver les aliments" },
            { "id": "JF8221", "parent": "JF822", "text": "Établir une relation entre l'activité, l'âge, les conditions de l'environnement et les besoins de l'organisme." },
            { "id": "JF82211", "parent": "JF8221", "text": "Apports alimentaires : qualité et quantité." },
            { "id": "JF82212", "parent": "JF8221", "text": "Origine des aliments consommés : un exemple d'élevage, un exemple de culture" },
            { "id": "JF8222", "parent": "JF822", "text": "Relier l'approvisionnement des organes aux fonctions de nutrition." },
            { "id": "JF82221", "parent": "JF8222", "text": "Apports discontinus (repas) et besoins continus" },
            { "id": "JF8223", "parent": "JF822", "text": "Mettre en évidence la place des microorganismes dans la production et la conservation des aliments." },
            { "id": "JF8224", "parent": "JF822", "text": "Mettre en relation les paramètres physicochimiques lors de la conservation des aliments et la limitation de la prolifération de microorganismes pathogènes." },
            { "id": "JF82241", "parent": "JF8224", "text": "Quelques techniques permettant d'éviter la prolifération des microorganismes." },
            { "id": "JF82242", "parent": "JF8224", "text": "Hygiène alimentaire." },
            { "id": "JF823", "parent": "JF82", "text": "Décrire comment les êtres vivants se développent et deviennent aptes à se reproduire" },
            { "id": "JF8231", "parent": "JF823", "text": "Identifier et caractériser les modifications subies par un organisme vivant (naissance, croissance, capacité à se reproduire, vieillissement, mort) au cours de sa vie." },
            { "id": "JF82311", "parent": "JF8231", "text": "Modifications de l'organisation et du fonctionnement d'une plante ou d'un animal au cours du temps, en lien avec sa nutrition et sa reproduction." },
            { "id": "JF82312", "parent": "JF8231", "text": "Différences morphologiques homme, femme, garçon, fille." },
            { "id": "JF82313", "parent": "JF8231", "text": "Stades de développement (grainesgermination- fleur-pollinisation, oeuf-larveadulte, oeuf-foetus-bébé-jeune-adulte)." },
            { "id": "JF8232", "parent": "JF823", "text": "Décrire et identifier les changements du corps au moment de la puberté." },
            { "id": "JF82321", "parent": "JF8232", "text": "Modifications morphologiques, comportementales et physiologiques lors de la puberté." },
            { "id": "JF82322", "parent": "JF8232", "text": "Rôle respectif des deux sexes dans la reproduction." },
            { "id": "JF824", "parent": "JF82", "text": "Expliquer l'origine de la matière organique des êtres vivants et son devenir" },
            { "id": "JF8241", "parent": "JF824", "text": "Relier les besoins des plantes vertes et leur place particulière dans les réseaux trophiques." },
            { "id": "JF82411", "parent": "JF8241", "text": "Besoins des plantes vertes." },
            { "id": "JF8242", "parent": "JF824", "text": "Identifier les matières échangées entre un être vivant et son milieu de vie." },
            { "id": "JF82421", "parent": "JF8242", "text": "Besoins alimentaires des animaux." },
            { "id": "JF82422", "parent": "JF8242", "text": "Devenir de la matière organique n'appartenant plus à un organisme vivant." },
            { "id": "JF82423", "parent": "JF8242", "text": "Décomposeurs." },
            { "id": "JF83", "parent": "SETC3", "text": "Matériaux et objets techniques" },
            { "id": "JF831", "parent": "JF83", "text": "Identifier les principales évolutions du besoin et des objets." },
            { "id": "JF8311", "parent": "JF831", "text": "Repérer les évolutions d'un objet dans différents contextes (historique, économique, culturel)." },
            { "id": "JF83111", "parent": "JF8311", "text": "L'évolution technologique (innovation, invention, principe technique)." },
            { "id": "JF83112", "parent": "JF8311", "text": "L'évolution des besoins." },
            { "id": "JF832", "parent": "JF83", "text": "Décrire le fonctionnement d'objets techniques, leurs fonctions et leurs constitutions" },
            { "id": "JF8321", "parent": "JF832", "text": "Besoin, fonction d'usage et d'estime." },
            { "id": "JF8322", "parent": "JF832", "text": "Fonction technique, solutions techniques." },
            { "id": "JF8323", "parent": "JF832", "text": "Représentation du fonctionnement d'un objet technique." },
            { "id": "JF8324", "parent": "JF832", "text": "Comparaison de solutions techniques : constitutions, fonctions, organes." },
            { "id": "JF833", "parent": "JF83", "text": "Identifier les principales familles de matériaux" },
            { "id": "JF8331", "parent": "JF833", "text": "Familles de matériaux (distinction des matériaux selon les relations entre formes, fonctions et procédés)." },
            { "id": "JF8332", "parent": "JF833", "text": "Caractéristiques et propriétés (aptitude au façonnage, valorisation)." },
            { "id": "JF8333", "parent": "JF833", "text": "Impact environnemental." },
            { "id": "JF834", "parent": "JF83", "text": "Concevoir et produire tout ou partie d'un objet technique en équipe pour traduire une solution technologique répondant à un besoin." },
            { "id": "JF8341", "parent": "JF834", "text": "Notion de contrainte." },
            { "id": "JF8342", "parent": "JF834", "text": "Recherche d'idées (schémas, croquis…)." },
            { "id": "JF8343", "parent": "JF834", "text": "Modélisation du réel (maquette, modèles géométrique et numérique), représentation en conception assistée par ordinateur." },
            { "id": "JF8344", "parent": "JF834", "text": "Processus, planning, protocoles, procédés de réalisation (outils, machines)." },
            { "id": "JF8345", "parent": "JF834", "text": "Choix de matériaux." },
            { "id": "JF8346", "parent": "JF834", "text": "Maquette, prototype." },
            { "id": "JF8347", "parent": "JF834", "text": "Vérification et contrôles (dimensions, fonctionnement)." },
            { "id": "JF835", "parent": "JF83", "text": "Repérer et comprendre la communication et la gestion de l'information" },
            { "id": "JF8351", "parent": "JF835", "text": "Environnement numérique de travail." },
            { "id": "JF8352", "parent": "JF835", "text": "Le stockage des données, notions d'algorithmes, les objets programmables." },
            { "id": "JF8353", "parent": "JF835", "text": "Usage des moyens numériques dans un réseau." },
            { "id": "JF8354", "parent": "JF835", "text": "Usage de logiciels usuels." },
            { "id": "JF84", "parent": "SETC3", "text": "La planète Terre. Les êtres vivants dans leur environnement" },
            { "id": "JF841", "parent": "JF84", "text": "Situer la Terre dans le système solaire et caractériser les conditions de la vie terrestre" },
            { "id": "JF8411", "parent": "JF841", "text": "Caractériser les conditions de vie sur Terre (température, présence d'eau liquide)." },
            { "id": "JF84111", "parent": "JF8411", "text": "Le Soleil, les planètes." },
            { "id": "JF84112", "parent": "JF8411", "text": "Position de la Terre dans le système solaire." },
            { "id": "JF84113", "parent": "JF8411", "text": "Histoire de la Terre et développement de la vie." },
            { "id": "JF8412", "parent": "JF841", "text": "Décrire les mouvements de la Terre (rotation sur elle-même et alternance jour-nuit, autour du Soleil et cycle des saisons)." },
            { "id": "JF84121", "parent": "JF8412", "text": "Les mouvements de la Terre sur elle-même et autour du Soleil." },
            { "id": "JF84122", "parent": "JF8412", "text": "Représentations géométriques de l'espace et des astres (cercle, sphère)." },
            { "id": "JF8413", "parent": "JF841", "text": "Identifier les composantes biologiques et géologiques d'un paysage." },
            { "id": "JF84131", "parent": "JF8413", "text": "Paysages, géologie locale, interactions avec l'environnement et le peuplement." },
            { "id": "JF8414", "parent": "JF841", "text": "Relier certains phénomènes naturels (tempêtes, inondations, tremblements de terre) à des risques pour les populations." },
            { "id": "JF84141", "parent": "JF8414", "text": "Phénomènes géologiques traduisant activité interne de la terre (volcanisme, tremblements de terre…)." },
            { "id": "JF84142", "parent": "JF8414", "text": "Phénomènes traduisant l'activité externe de la Terre : phénomènes météorologiques et climatiques ; évènements extrêmes (tempêtes, cyclones, inondations et sècheresses…)." },
            { "id": "JF842", "parent": "JF84", "text": "Identifier des enjeux liés à l'environnement" },
            { "id": "JF8421", "parent": "JF842", "text": "Décrire un milieu de vie dans ses diverses composantes." },
            { "id": "JF84211", "parent": "JF8421", "text": "Interactions des organismes vivants entre eux et avec leur environnement." },
            { "id": "JF8422", "parent": "JF842", "text": "Relier le peuplement d'un milieu et les conditions de vie." },
            { "id": "JF84221", "parent": "JF8422", "text": "Modification du peuplement en fonction des conditions physicochimiques du milieu et des saisons." },
            { "id": "JF84222", "parent": "JF8422", "text": "Écosystèmes (milieu de vie avec ses caractéristiques et son peuplement) ; conséquences de la modification d'un facteur physique ou biologique sur l'écosystème." },
            { "id": "JF84223", "parent": "JF8422", "text": "La biodiversité, un réseau dynamique." },
            { "id": "JF8423", "parent": "JF842", "text": "Identifier la nature des interactions entre les êtres vivants et leur importance dans le peuplement des milieux." },
            { "id": "JF8424", "parent": "JF842", "text": "Identifier quelques impacts humains dans un environnement (aménagement, impact technologique...)." },
            { "id": "JF84241", "parent": "JF8424", "text": "Aménagements de de l'espace par les humains et contraintes naturelles ; impacts technologiques positifs et négatifs sur l'environnement." },
            { "id": "JF8425", "parent": "JF842", "text": "Suivre et décrire le devenir de quelques matériaux de l'environnement proche." },
            { "id": "JF8426", "parent": "JF842", "text": "Relier les besoins de l'être humain, l'exploitation des ressources naturelles et les impacts à prévoir et gérer (risques, rejets, valorisations, épuisement des stocks)." },
            { "id": "JF8427", "parent": "JF842", "text": "Exploitation raisonnée et utilisation des ressources (eau, pétrole, charbon, minerais, biodiversité, sols, bois, roches à des fins de construction…)." },
        ],
        dateDerniereSauvegarde: new Date('2025-08-17T21:00:00.000Z'),
        journal: [
            {
                id: 'bouchon-30', date: new Date('2025-08-31T22:00:00.000Z'),
                remarque: 'cahier journal du 1 septembre 2025 : une belle journée studieuse',
                temps: [
                    {
                        debut: '9h00', fin: '9h15',
                        id: 'bouchon-28',
                        groupes: [{
                            id: 'bouchon-40', nom: 'accueil',
                            commentaire: 'Temps d\'accueil : un élève en retard mais le temps a été calme',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: ['bouchon-evnr1v6a', 'bouchon-rvns1q6a', 'bouchon-lkjsf2d3'],
                            competences: [
                                'M-1-1-1-7'
                            ]
                        }]
                    },
                    {
                        debut: '9h15', fin: '9h45',
                        id: 'bouchon-29', groupes: [{
                            id: 'bouchon-39', nom: 'math',
                            commentaire: 'début de journée',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: ['bouchon-evnr1v6a', 'bouchon-rvns1q6a', 'bouchon-lkjsf2d3'],
                            competences: [
                                'M-1-1-1-7'
                            ]
                        }]
                    }
                ]
            },
            {
                id: 'bouchon-31', date: new Date('2025-09-01T22:00:00.000Z'),
                remarque: 'Cahier journal du 02/09',
                temps: [
                    {
                        debut: '9h00', fin: '9h15',
                        id: 'bouchon-32',
                        groupes: [{
                            id: 'bouchon-38', nom: 'T1',
                            commentaire: 'Comm T1',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: [
                                'bouchon-evnr1v6a',
                                'bouchon-rvns1q6a',
                                'bouchon-lkjsf2d3'
                            ],
                            competences: [
                                'M-1-1-1-7', 'M-1-1-1-6'
                            ]
                        }]
                    },
                    {
                        debut: '9h15', fin: '9h30',
                        id: 'bouchon-33',
                        groupes: [{
                            id: 'bouchon-37', nom: 'T2',
                            commentaire: 'Comm T2',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: [
                                'bouchon-evnr1v6a',
                                'bouchon-rvns1q6a'
                            ],
                            competences: [
                                'M-1-1-1-7', 'M-1-1-1-6'
                            ]
                        }]
                    }
                ]
            }
        ],
        taches: [
            {
                id: 'bouchon-36', titre: 'Taches 1',
                echeances: [
                    {
                        id: 'bouchon-34', nom: 'Echéance 1-2',
                        date: new Date('2025-09-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35', nom: 'Echéance 1-1',
                        date: new Date('2025-09-14T22:00:00.000Z'),
                        termine: false
                    }
                ]
            },
            {
                id: 'bouchon-36a', titre: 'Taches 2',
                echeances: [
                    {
                        id: 'bouchon-34a', nom: 'Echéance 2-1',
                        date: new Date('2020-09-21T22:00:00.000Z'),
                        termine: false
                    }
                ]
            },
            {
                id: 'bouchon-36b', titre: 'Taches 3',
                echeances: [
                    {
                        id: 'bouchon-34b', nom: 'Echéance 3-1',
                        date: new Date('2026-09-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35b', nom: 'Echéance 3-1',
                        date: new Date('2024-08-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35bb', nom: 'Echéance 3-termineFin',
                        date: new Date('2024-08-22T22:00:00.000Z'),
                        termine: true
                    },
                    {
                        id: 'bouchon-35bbb', nom: 'Echéance 3-termineDebut',
                        date: new Date('2024-08-02T22:00:00.000Z'),
                        termine: true
                    }
                ]
            }
        ]
    };
}