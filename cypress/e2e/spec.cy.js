describe("Votes  tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("should upvote properly", () => {
        cy.get('[data-cy="scores-comp"]')
            .first()
            .within(() => {
                cy.get('[data-cy="score"]')
                    .invoke("text")
                    .then(parseInt)
                    .as("score");
                cy.get('[data-cy="upvote"]').click();
                cy.get("@score").then((sc) => {
                    cy.get('[data-cy="score"]')
                        .invoke("text")
                        .then(parseInt)
                        .should("be.a", "number")
                        .and("equal", sc + 1);
                });
            });
    });

    it("should downvote properly", () => {
        cy.get('[data-cy="scores-comp"]')
            .first()
            .within(() => {
                cy.get('[data-cy="score"]')
                    .invoke("text")
                    .then(parseInt)
                    .as("score");
                cy.get('[data-cy="downvote"]').click();
                cy.get("@score").then((sc) => {
                    cy.get('[data-cy="score"]')
                        .invoke("text")
                        .then(parseInt)
                        .should("be.a", "number")
                        .and("equal", sc - 1);
                });
            });
    });

    it("should disable button after upvote", () => {
        cy.get('[data-cy="scores-comp"]')
            .first()
            .within(() => {
                cy.get('[data-cy="upvote"]').click();
                cy.get('[data-cy="upvote"]').should(
                    "have.class",
                    "Mui-disabled"
                );
            });
    });

    it("should disable button after downvote", () => {
        cy.get('[data-cy="scores-comp"]')
            .first()
            .within(() => {
                cy.get('[data-cy="downvote"]').click();
                cy.get('[data-cy="downvote"]').should(
                    "have.class",
                    "Mui-disabled"
                );
            });
    });
});

describe("Post comment tests", () => {
    it("should post a new comment", () => {
        cy.get('[data-cy="comment-input"]')
            .click()
            .type("mon super commentaire");
        cy.get('[data-cy="post-comment-btn"]').click();

        cy.get('[data-cy="comment-item"]')
            .last()
            .should("contain", "mon super commentaire");
    });

    it("should reply with the name of the user you replying to", () => {
        cy.get('[data-cy="comment-item"]')
            .first()
            .within(() => {
                cy.get('[data-cy="comment-username"]')
                    .invoke("text")
                    .as("username");
                cy.get('[data-cy="reply-btn"]').click();
            });
        cy.get("@username").then((user) => {
            cy.get('[data-cy="comment-input"]')
                .first()
                .click()
                .type("super mon commentaire");
            cy.get('[data-cy="post-comment-btn"]').first().click();
            cy.get('[data-cy="replies"]')
                .first()
                .should("contain", `@${user} super mon commentaire`);
        });
    });
});
