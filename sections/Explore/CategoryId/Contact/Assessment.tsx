import { Text, Grid, Box, Flex } from "@chakra-ui/react"
import ZIcon from "../../../../components/Icon"
import Progress from "../../../../components/Progress"
import RateServiceModal from "./RateServiceModal"
export default function Assessment({ post, scoreReviews: querySql }) {
  const scoreReviews = querySql[0] || {
    score_average: 0,
    score_count: 0,
    score_five_percent: 0,
    score_five: 0,
    score_four_percent: 0,
    score_four: 0,
    score_three_percent: 0,
    score_three: 0,
    score_two_percent: 0,
    score_two: 0,
    score_one_percent: 0,
    score_one: 0
  }
  // console.log(scoreReviews)
  return (
    <Box py="5">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Box>
              <Text fontSize="x1" className="bold600">
                Valoraciones
              </Text>
              <Flex align="center" justify="space-between">
                <Grid templateColumns="50% 60%" gap="3">
                  <Text fontSize="5xl" className="bold600">
                    {scoreReviews.score_average}
                  </Text>
                  <Flex direction="column" justify="space-evenly">
                    <Text fontSize="xs">
                      <Flex>
                        {Array.from(
                          Array(Math.round(scoreReviews.score_average)).keys()
                        ).map((val, idx) => (
                          <ZIcon key={idx} name="star" color="secondary" />
                        ))}
                        {Array.from(
                          Array(
                            5 - Math.round(scoreReviews.score_average)
                          ).keys()
                        ).map((val, idx) => (
                          <ZIcon key={idx} name="star" color="white" />
                        ))}
                      </Flex>
                    </Text>
                    <Text fontSize="xs">
                      {scoreReviews.score_count} Reviews
                    </Text>
                  </Flex>
                </Grid>
              </Flex>
            </Box>
            <Box>
              <Progress
                value={scoreReviews.score_five_percent}
                start="5"
                quantity={scoreReviews.score_five}
              />
              <Progress
                value={scoreReviews.score_four_percent}
                start="4"
                quantity={scoreReviews.score_four}
              />
              <Progress
                value={scoreReviews.score_three_percent}
                start="3"
                quantity={scoreReviews.score_three}
              />
              <Progress
                value={scoreReviews.score_two_percent}
                start="2"
                quantity={scoreReviews.score_two}
              />
              <Progress
                value={scoreReviews.score_one_percent}
                start="1"
                quantity={scoreReviews.score_one}
              />
            </Box>
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
